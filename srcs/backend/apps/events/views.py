from rest_framework import viewsets
from rest_framework.views import APIView
from django.db.models import Sum
from django.contrib.auth import logout as auth_logout

from rest_framework.decorators import action, api_view
from rest_framework.response import Response

from .models import (
    Page,
    Exhibition,
    Palestra,
    Workshop,
    VideoScreening,
    Concert,
    SpeedHunting,
    SpecialZone,
)

from .serializers import (
    PageSerializer,
    ExhibitionSerializer,
    PalestraSerializer,
    WorkshopSerializer,
    VideoScreeningSerializer,
    ConcertSerializer,
    SpeedHuntingSerializer,
    SpecialZoneSerializer,
)

class PageCountView(APIView):
    def get(self, request):
        return Response({"count": Page.objects.count()})


class PageListView(APIView):
    def get(self, request):
        pages = Page.objects.all()
        serializer = PageSerializer(pages, many=True)
        return Response(serializer.data)


class PageDetailView(APIView):
    def get(self, request, pk):
        page = get_object_or_404(Page, pk=pk)
        serializer = PageSerializer(page)
        return Response(serializer.data)

    def patch(self, request, pk):
        page = get_object_or_404(Page, pk=pk)
        serializer = PageSerializer(page, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class SpeakerCountView(APIView):
    def get(self, request):
        return Response({"count": Palestra.objects.count()})


class TotalVisitorsView(APIView):
    def get(self, request):
        total = Page.objects.aggregate(total=Sum('views'))['total'] or 0
        return Response({ "count": total })  


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


@api_view(['GET'])
def me(request):
    if not request.user.is_authenticated:
        return Response({"detail": "Not authenticated"}, status=401)
    user = request.user
    if user.is_superuser:
        role = "Administrator"
    elif user.is_staff:
        role = "Staff"
    else:
        role = "User"
    return Response({
        "first_name": user.first_name,
        "last_name": user.last_name,
        "username": user.username,
        "role": role,
    })


@api_view(['POST'])
def logout_view(request):
    auth_logout(request)
    return Response({"detail": "Logged out"})