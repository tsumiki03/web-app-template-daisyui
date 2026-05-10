from django.test import TestCase
from ninja.testing import TestClient
from .api import router

# Create your tests here.


class HealthCheckTest(TestCase):
    def setUp(self):
        self.ninja_client = TestClient(router)

    def test_health(self):
        response = self.ninja_client.get("/health")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"status": "ok"})
