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

admin.site.register(Exposicoes)
admin.site.register(SunsetTalks)
admin.site.register(Workshops)
admin.site.register(Cinema)
admin.site.register(Concertos)
admin.site.register(SpeedHunting)
admin.site.register(SemanaLabia)