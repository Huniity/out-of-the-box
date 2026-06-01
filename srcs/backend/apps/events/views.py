from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.db.models import Sum
from django.contrib.auth import logout as auth_logout
from django.shortcuts import get_object_or_404

from rest_framework.decorators import action, api_view
from rest_framework.response import Response

from .models import (
    Page,
    Exposicoes,
    SunsetTalks,
    Workshops,
    Cinema,
    Concertos,
    SpeedHunting,
    SemanaLabia,
)

from .serializers import (
    PageSerializer,
    ExposicoesSerializer,
    SunsetTalksSerializer,
    WorkshopsSerializer,
    CinemaSerializer,
    ConcertosSerializer,
    SpeedHuntingSerializer,
    SemanaLabiaSerializer,
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
        return Response({"count": SunsetTalks.objects.count()})


class TotalVisitorsView(APIView):
    def get(self, request):
        total = Page.objects.aggregate(total=Sum('views'))['total'] or 0
        return Response({ "count": total })  


class ExposicoesViewSet(viewsets.ModelViewSet):
    queryset = Exposicoes.objects.all()
    serializer_class = ExposicoesSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class SunsetTalksViewSet(viewsets.ModelViewSet):
    queryset = SunsetTalks.objects.all()
    serializer_class = SunsetTalksSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class WorkshopsViewSet(viewsets.ModelViewSet):
    queryset = Workshops.objects.all()
    serializer_class = WorkshopsSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class CinemaViewSet(viewsets.ModelViewSet):
    queryset = Cinema.objects.all()
    serializer_class = CinemaSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ConcertosViewSet(viewsets.ModelViewSet):
    queryset = Concertos.objects.all()
    serializer_class = ConcertosSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    @action(detail=True, methods=["post"], url_path="toggle-active")
    def toggle_active(self, request, pk=None):
        concerto = self.get_object()
        concerto.is_active = not concerto.is_active
        concerto.save()

        serializer = self.get_serializer(concerto)
        return Response(serializer.data)


class SpeedHuntingViewSet(viewsets.ModelViewSet):
    queryset = SpeedHunting.objects.all()
    serializer_class = SpeedHuntingSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class SemanaLabiaViewSet(viewsets.ModelViewSet):
    queryset = SemanaLabia.objects.all()
    serializer_class = SemanaLabiaSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


@api_view(['GET'])
def highlights_view(request):
    def fmt(dt):
        return dt.isoformat() if dt else None

    def img(field):
        if not field:
            return None
        req = request
        return req.build_absolute_uri(field.url) if field else None

    results = []

    for c in Concertos.objects.filter(is_highlight=True, is_active=True):
        results.append({
            'title': c.band_name,
            'subtitle': c.description[:60] + '…' if len(c.description) > 60 else c.description,
            'tag': 'CONCERTO',
            'start_datetime': fmt(c.start_datetime),
            'location': c.location,
            'image': img(c.image),
        })

    for s in SunsetTalks.objects.filter(is_highlight=True, is_active=True):
        results.append({
            'title': s.title,
            'subtitle': s.speaker_name,
            'tag': 'TALK',
            'start_datetime': fmt(s.start_datetime),
            'location': s.location,
            'image': img(s.image),
        })

    for w in Workshops.objects.filter(is_highlight=True, is_active=True):
        results.append({
            'title': w.title,
            'subtitle': w.mentor_name,
            'tag': 'WORKSHOP',
            'start_datetime': fmt(w.start_datetime),
            'location': w.location,
            'image': None,
        })

    for ci in Cinema.objects.filter(is_highlight=True, is_active=True):
        results.append({
            'title': ci.title,
            'subtitle': ci.director_team,
            'tag': 'CINEMA',
            'start_datetime': fmt(ci.start_datetime),
            'location': ci.location,
            'image': img(ci.image),
        })

    for e in Exposicoes.objects.filter(is_highlight=True, is_active=True):
        results.append({
            'title': e.title,
            'subtitle': e.artists[:60] + '…' if len(e.artists) > 60 else e.artists,
            'tag': 'EXPOSIÇÃO',
            'start_datetime': e.start_date.isoformat() if e.start_date else None,
            'location': e.location,
            'image': img(e.image),
        })

    results.sort(key=lambda x: x['start_datetime'] or '')
    return Response(results)


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