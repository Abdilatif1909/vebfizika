from django.test import TestCase, Client
from django.utils import timezone
from .models import LogMessage

class TestLogMessageModel(TestCase):

    def setUp(self):
        self.log_message = LogMessage.objects.create(
            message='Test Message',
            log_date=timezone.now()
        )

    def test_log_message_creation(self):
        self.assertTrue(isinstance(self.log_message, LogMessage))
        self.assertEqual(self.log_message.message, 'Test Message')

    def test_log_message_str(self):
        expected_object_name = f"'{self.log_message.message}' logged on {timezone.localtime(self.log_message.log_date).strftime('%A, %d %B, %Y at %X')}"
        self.assertEqual(str(self.log_message), expected_object_name)



class TestViews(TestCase):

    def setUp(self):
        self.client = Client()

    def test_not_found_url(self):
        # Unknown frontend routes intentionally return the React SPA shell.
        # Check an unknown API route for a backend 404 instead.
        response = self.client.get('/api/a-url-that-does-not-exist/')

        self.assertEqual(response.status_code, 404)

