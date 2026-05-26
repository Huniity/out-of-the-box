from rest_framework import serializers

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


class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = '__all__'
        

class ExposicoesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exposicoes
        fields = '__all__'


class SunsetTalksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SunsetTalks
        fields = '__all__'


class WorkshopsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workshops
        fields = '__all__'


class CinemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cinema
        fields = '__all__'


class ConcertosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Concertos
        fields = '__all__'


class SpeedHuntingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpeedHunting
        fields = '__all__'


class SemanaLabiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SemanaLabia
        fields = '__all__'