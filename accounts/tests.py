from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from accounts.models import User


class AuthApiTests(APITestCase):
	def test_register_returns_tokens_and_user(self):
		response = self.client.post(
			reverse("auth_register"),
			{
				"username": "student1",
				"email": "student1@example.com",
				"password": "strongpass123",
				"first_name": "Student",
				"last_name": "One",
				"role": User.Role.STUDENT,
			},
			format="json",
		)

		self.assertEqual(response.status_code, status.HTTP_201_CREATED)
		self.assertIn("access", response.data)
		self.assertIn("refresh", response.data)
		self.assertEqual(response.data["role"], User.Role.STUDENT)
		self.assertEqual(response.data["user"]["email"], "student1@example.com")

	def test_register_rejects_admin_role(self):
		response = self.client.post(
			reverse("auth_register"),
			{
				"username": "admin1",
				"email": "admin1@example.com",
				"password": "strongpass123",
				"first_name": "Admin",
				"last_name": "One",
				"role": User.Role.ADMIN,
			},
			format="json",
		)

		self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

	def test_login_with_email_returns_user_payload(self):
		user = User.objects.create_user(
			username="teacher1",
			email="teacher1@example.com",
			password="strongpass123",
			role=User.Role.TEACHER,
			first_name="Teach",
			last_name="Er",
		)

		response = self.client.post(
			reverse("token_obtain_pair"),
			{"username": user.email, "password": "strongpass123"},
			format="json",
		)

		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertEqual(response.data["role"], User.Role.TEACHER)
		self.assertEqual(response.data["user"]["username"], user.username)

	def test_me_get_and_put(self):
		user = User.objects.create_user(
			username="guest1",
			email="guest1@example.com",
			password="strongpass123",
			role=User.Role.GUEST,
		)
		self.client.force_authenticate(user=user)

		get_response = self.client.get(reverse("auth_me"))
		self.assertEqual(get_response.status_code, status.HTTP_200_OK)
		self.assertEqual(get_response.data["username"], "guest1")

		put_response = self.client.put(
			reverse("auth_me"),
			{
				"first_name": "Guest",
				"last_name": "User",
				"email": "guest-updated@example.com",
				"phone": "+998901234567",
				"bio": "Learning visitor",
			},
			format="json",
		)

		self.assertEqual(put_response.status_code, status.HTTP_200_OK)
		self.assertEqual(put_response.data["full_name"], "Guest User")
		self.assertEqual(put_response.data["phone"], "+998901234567")
