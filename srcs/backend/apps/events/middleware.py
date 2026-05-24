
from django.db.models import F
from apps.events.models import Page

class PageViewMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        if response.status_code == 200:
            pass  # view tracking disabled (url field removed from Page model)

        return response