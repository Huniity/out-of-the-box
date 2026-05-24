from rest_framework import viewsets
from rest_framework.views import APIView
from django.db.models import Sum
from django.contrib.auth import logout as auth_logout

from rest_framework.decorators import action, api_view
from rest_framework.response import Response

from .models import (
    Page,
    Exposicoes,
    Palestras,
    Workshops,
    Projecoes,
    Concertos,
    SpeedHunting,
    SemanaLabia,
)

from .serializers import (
    PageSerializer,
    ExposicoesSerializer,
    PalestrasSerializer,
    WorkshopsSerializer,
    ProjecoesSerializer,
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
        return Response({"count": Palestras.objects.count()})


class TotalVisitorsView(APIView):
    def get(self, request):
        total = Page.objects.aggregate(total=Sum('views'))['total'] or 0
        return Response({ "count": total })  


class ExposicoesViewSet(viewsets.ModelViewSet):
    queryset = Exposicoes.objects.all()
    serializer_class = ExposicoesSerializer


class PalestrasViewSet(viewsets.ModelViewSet):
    queryset = Palestras.objects.all()
    serializer_class = PalestrasSerializer


class WorkshopsViewSet(viewsets.ModelViewSet):
    queryset = Workshops.objects.all()
    serializer_class = WorkshopsSerializer


class ProjecoesViewSet(viewsets.ModelViewSet):
    queryset = Projecoes.objects.all()
    serializer_class = ProjecoesSerializer


class ConcertosViewSet(viewsets.ModelViewSet):
    queryset = Concertos.objects.all()
    serializer_class = ConcertosSerializer

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


class SemanaLabiaViewSet(viewsets.ModelViewSet):
    queryset = SemanaLabia.objects.all()
    serializer_class = SemanaLabiaSerializer


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