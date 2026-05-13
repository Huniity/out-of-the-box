
from django.db.models import F
from apps.events.models import Page

class PageViewMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        if response.status_code == 200:
            Page.objects.filter(url=request.path).update(views=F('views') + 1)

        return response