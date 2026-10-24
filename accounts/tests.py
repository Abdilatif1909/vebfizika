import csv
from pathlib import Path
from tempfile import TemporaryDirectory

from django.core.management import call_command, CommandError
from django.test import override_settings
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


class DemoStudentCommandTests(APITestCase):
	@override_settings(DEBUG=False)
	def test_command_refuses_to_run_when_debug_is_disabled(self):
		with self.assertRaises(CommandError):
			call_command("create_demo_students", "--confirm", "--credentials-file", "unused.csv")
		self.assertEqual(User.objects.count(), 0)

	@override_settings(DEBUG=True)
	def test_existing_real_account_collision_is_rejected_without_modification(self):
		administrator = User.objects.create_superuser(
			username="demo_student_0001",
			email="admin@example.com",
			password="strong-admin-password",
			role=User.Role.ADMIN,
		)
		with TemporaryDirectory() as directory:
			with self.assertRaises(CommandError):
				call_command(
					"create_demo_students",
					"--count",
					"1",
					"--confirm",
					"--credentials-file",
					str(Path(directory) / "students.csv"),
				)
		administrator.refresh_from_db()
		self.assertEqual(User.objects.count(), 1)
		self.assertEqual(administrator.role, User.Role.ADMIN)
		self.assertTrue(administrator.is_superuser)

	@override_settings(DEBUG=True)
	@override_settings(PASSWORD_HASHERS=["django.contrib.auth.hashers.MD5PasswordHasher"])
	def test_creates_400_unique_hashed_demo_students_and_is_idempotent(self):
		with TemporaryDirectory() as directory:
			credentials_path = Path(directory) / "private" / "students.csv"
			call_command("create_demo_students", "--confirm", "--credentials-file", str(credentials_path), verbosity=0)
			self.assertEqual(User.objects.count(), 400)

			students = list(User.objects.order_by("username"))
			self.assertEqual(len({user.username for user in students}), 400)
			self.assertTrue(all(user.role == User.Role.STUDENT for user in students))
			self.assertTrue(all("[demo-student]" in user.bio for user in students))
			self.assertTrue(students[0].check_password("not-the-password") is False)

			with credentials_path.open(encoding="utf-8", newline="") as stream:
				credentials = list(csv.DictReader(stream))
			self.assertEqual(len(credentials), 400)
			self.assertTrue(all(row["password"] for row in credentials))
			self.assertTrue(all(user.password != row["password"] for user, row in zip(students, credentials)))

			call_command("create_demo_students", "--confirm", "--credentials-file", str(credentials_path), verbosity=0)
			self.assertEqual(User.objects.count(), 400)
