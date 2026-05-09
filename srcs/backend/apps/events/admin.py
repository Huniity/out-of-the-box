from django.contrib import admin

from .models import (
    Exhibition,
    Palestra,
    Workshop,
    VideoScreening,
    Concert,
    SpeedHunting,
    SpecialZone,
)

admin.site.register(Exhibition)
admin.site.register(Palestra)
admin.site.register(Workshop)
admin.site.register(VideoScreening)
admin.site.register(Concert)
admin.site.register(SpeedHunting)
admin.site.register(SpecialZone)