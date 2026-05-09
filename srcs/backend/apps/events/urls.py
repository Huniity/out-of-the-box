# API URL routes
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    ExhibitionViewSet,
    PalestraViewSet,
    WorkshopViewSet,
    VideoScreeningViewSet,
    ConcertViewSet,
    SpeedHuntingViewSet,
    SpecialZoneViewSet,
)

router = DefaultRouter()

router.register(r'exhibitions', ExhibitionViewSet)
router.register(r'palestras', PalestraViewSet)
router.register(r'workshops', WorkshopViewSet)
router.register(r'video-screenings', VideoScreeningViewSet)
router.register(r'concerts', ConcertViewSet)
router.register(r'speed-hunting', SpeedHuntingViewSet)
router.register(r'special-zones', SpecialZoneViewSet)

urlpatterns = [
    path('', include(router.urls)),
]