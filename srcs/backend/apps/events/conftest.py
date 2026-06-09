import pytest
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient


@pytest.fixture
def api_client():
    return APIClient()


@pytest.fixture
def user(db):
    return get_user_model().objects.create_user(
        username="regular-user",
        email="regular-user@example.com",
        password="strong-password-123",
    )


@pytest.fixture
def staff_user(db):
    return get_user_model().objects.create_user(
        username="staff-user",
        email="staff-user@example.com",
        password="strong-password-123",
        is_staff=True,
    )