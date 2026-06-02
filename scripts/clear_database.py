import os
import sys
from datetime import timedelta, date, datetime
from pathlib import Path

# Make Django project importable inside Docker
BACKEND_DIR = Path("/app")
sys.path.insert(0, str(BACKEND_DIR))

# Django settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

import django

django.setup()

from apps.events.models import (
    Page,
    Concertos,
    Exposicoes,
    SunsetTalks,
    SemanaLabia,
    SpeedHunting,
    Cinema,
    Workshops,
)




def clear_database():
    print("Deleting old sample events...")

    Concertos.objects.all().delete()
    Exposicoes.objects.all().delete()
    SunsetTalks.objects.all().delete()
    SemanaLabia.objects.all().delete()
    SpeedHunting.objects.all().delete()
    Cinema.objects.all().delete()
    Workshops.objects.all().delete()
    Page.objects.all().delete()




def main():
    clear_database()
    print("Database cleared successfully!")


if __name__ == "__main__":
    main()