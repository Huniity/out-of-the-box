from rest_framework import viewsets

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


class SpeedHuntingViewSet(viewsets.ModelViewSet):
    queryset = SpeedHunting.objects.all()
    serializer_class = SpeedHuntingSerializer


class SpecialZoneViewSet(viewsets.ModelViewSet):
    queryset = SpecialZone.objects.all()
    serializer_class = SpecialZoneSerializer