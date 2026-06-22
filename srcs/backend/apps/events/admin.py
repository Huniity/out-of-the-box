from django.contrib import admin

from .models import (
    Exposicoes,
    SunsetTalks,
    Workshops,
    Cinema,
    Concertos,
    SpeedHunting,
    SemanaLabia,
)


@admin.register(SunsetTalks)
class SunsetTalksAdmin(admin.ModelAdmin):
    list_display = ('title', 'speaker_name', 'category', 'start_datetime', 'priority', 'is_highlight', 'is_active')
    list_editable = ('priority', 'is_highlight', 'is_active')
    ordering = ('-priority', 'start_datetime')


@admin.register(Concertos)
class ConcertosAdmin(admin.ModelAdmin):
    list_display = ('band_name', 'start_datetime', 'priority', 'is_highlight', 'is_active')
    list_editable = ('priority', 'is_highlight', 'is_active')
    ordering = ('-priority', 'start_datetime')


@admin.register(Workshops)
class WorkshopsAdmin(admin.ModelAdmin):
    list_display = ('title', 'mentor_name', 'category', 'start_datetime', 'priority', 'is_highlight', 'is_active')
    list_editable = ('priority', 'is_highlight', 'is_active')
    ordering = ('-priority', 'start_datetime')


@admin.register(Cinema)
class CinemaAdmin(admin.ModelAdmin):
    list_display = ('title', 'director_team', 'start_datetime', 'priority', 'is_highlight', 'is_active')
    list_editable = ('priority', 'is_highlight', 'is_active')
    ordering = ('-priority', 'start_datetime')


@admin.register(Exposicoes)
class ExposicoesAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'start_date', 'priority', 'is_highlight', 'is_active')
    list_editable = ('priority', 'is_highlight', 'is_active')
    ordering = ('-priority', 'start_date')


admin.site.register(SpeedHunting)
admin.site.register(SemanaLabia)
