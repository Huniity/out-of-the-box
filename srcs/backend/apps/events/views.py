from rest_framework import viewsets

from rest_framework.decorators import action
from rest_framework.response import Response

from .models import (
    Exhibition,
    Palestra,
    Workshop,
    VideoScreening,
    Concert,
    SpeedHunting,
    SpecialZone,
)

from .serializers import (
    ExhibitionSerializer,
    PalestraSerializer,
    WorkshopSerializer,
    VideoScreeningSerializer,
    ConcertSerializer,
    SpeedHuntingSerializer,
    SpecialZoneSerializer,
)


class ExhibitionViewSet(viewsets.ModelViewSet):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer


class PalestraViewSet(viewsets.ModelViewSet):
    queryset = Palestra.objects.all()
    serializer_class = PalestraSerializer


class WorkshopViewSet(viewsets.ModelViewSet):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer


class VideoScreeningViewSet(viewsets.ModelViewSet):
    queryset = VideoScreening.objects.all()
    serializer_class = VideoScreeningSerializer


class ConcertViewSet(viewsets.ModelViewSet):
    queryset = Concert.objects.all()
    serializer_class = ConcertSerializer

    @action(detail=True, methods=["post"], url_path="toggle-active")
    def toggle_active(self, request, pk=None):
        concert = self.get_object()
        concert.is_active = not concert.is_active
        concert.save()

        serializer = self.get_serializer(concert)
        return Response(serializer.data)


class SpeedHuntingViewSet(viewsets.ModelViewSet):
    queryset = SpeedHunting.objects.all()
    serializer_class = SpeedHuntingSerializer


class SpecialZoneViewSet(viewsets.ModelViewSet):
    queryset = SpecialZone.objects.all()
    serializer_class = SpecialZoneSerializer