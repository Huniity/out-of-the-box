# API URL routes
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    PageCountView,
    PageListView,
    PageDetailView,
    SpeakerCountView,
    TotalVisitorsView,
    ExposicoesViewSet,
    SunsetTalksViewSet,
    WorkshopsViewSet,
    CinemaViewSet,
    ConcertosViewSet,
    SpeedHuntingViewSet,
    SemanaLabiaViewSet,
    me,
    logout_view,
)

router = DefaultRouter()

router.register(r'exposicoes', ExposicoesViewSet)
router.register(r'sunset-talks', SunsetTalksViewSet)
router.register(r'workshops', WorkshopsViewSet)
router.register(r'cinema', CinemaViewSet)
router.register(r'concertos', ConcertosViewSet)
router.register(r'speed-hunting', SpeedHuntingViewSet)
router.register(r'semana-labia', SemanaLabiaViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('page/views/', TotalVisitorsView.as_view()),
    path("page/", PageCountView.as_view(), name="page-count"),
    path("pages/", PageListView.as_view(), name="page-list"),
    path("pages/<int:pk>/", PageDetailView.as_view(), name="page-detail"),
    path("speaker/", SpeakerCountView.as_view(), name="speaker-count"),
    path("auth/me/", me, name="auth-me"),
    path("auth/logout/", logout_view, name="auth-logout"),
]