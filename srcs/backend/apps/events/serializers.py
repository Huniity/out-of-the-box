from rest_framework import serializers

from .models import (
    Exhibition,
    Palestra,
    Workshop,
    VideoScreening,
    Concert,
    SpeedHunting,
    SpecialZone,
)


class ExhibitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exhibition
        fields = '__all__'


class PalestraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Palestra
        fields = '__all__'


class WorkshopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workshop
        fields = '__all__'


class VideoScreeningSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoScreening
        fields = '__all__'


class ConcertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Concert
        fields = '__all__'


class SpeedHuntingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpeedHunting
        fields = '__all__'


class SpecialZoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialZone
        fields = '__all__'