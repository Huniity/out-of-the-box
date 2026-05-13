# API URL routes
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    PageCountView,
    PageListView,
    SpeakerCountView,
    TotalVisitorsView,
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
    path('page/views/', TotalVisitorsView.as_view()),
    path("page/", PageCountView.as_view(), name="page-count"),
    path("pages/", PageListView.as_view(), name="page-list"),
    path("speaker/", SpeakerCountView.as_view(), name="speaker-count"),
]