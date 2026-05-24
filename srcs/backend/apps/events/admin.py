from django.contrib import admin

from .models import (
    Exposicoes,
    Palestras,
    Workshops,
    Projecoes,
    Concertos,
    SpeedHunting,
    SemanaLabia,
)

admin.site.register(Exposicoes)
admin.site.register(Palestras)
admin.site.register(Workshops)
admin.site.register(Projecoes)
admin.site.register(Concertos)
admin.site.register(SpeedHunting)
admin.site.register(SemanaLabia)