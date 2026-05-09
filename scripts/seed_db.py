import os
import sys
from datetime import timedelta
from pathlib import Path

# Make Django project importable inside Docker
BACKEND_DIR = Path("/app")
sys.path.insert(0, str(BACKEND_DIR))

# Django settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

import django

django.setup()

from django.core.files.base import ContentFile
from django.utils import timezone

from apps.events.models import (
    Concert,
    Exhibition,
    Palestra,
    SpecialZone,
    SpeedHunting,
    VideoScreening,
    Workshop,
)


# Tiny valid 1x1 PNG image
DUMMY_IMAGE = (
    b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01"
    b"\x00\x00\x00\x01\x08\x02\x00\x00\x00\x90wS\xde"
    b"\x00\x00\x00\x0cIDATx\x9cc\xf8\xff\xff?\x00\x05"
    b"\xfe\x02\xfeA\x0d\xa4\xb3\x00\x00\x00\x00IEND\xaeB`\x82"
)


def add_image(instance, filename):
    instance.image.save(filename, ContentFile(DUMMY_IMAGE), save=True)


def clear_database():
    print("Deleting old sample events...")

    Concert.objects.all().delete()
    Exhibition.objects.all().delete()
    Palestra.objects.all().delete()
    SpecialZone.objects.all().delete()
    SpeedHunting.objects.all().delete()
    VideoScreening.objects.all().delete()
    Workshop.objects.all().delete()


def seed_database():
    now = timezone.now()

    print("Creating sample events...")

    concert = Concert.objects.create(
        title="Opening Night Concert",
        description="A live concert to open the event with energy and music.",
        artist_name="The Algarve Collective",
        lineup="DJ Luna, The Wave Riders, Maria Sol",
        start_datetime=now + timedelta(days=1, hours=18),
        end_datetime=now + timedelta(days=1, hours=21),
        location="Main Stage",
        is_active=True,
    )
    add_image(concert, "concert.png")

    exhibition = Exhibition.objects.create(
        title="Digital Art Exhibition",
        description="An exhibition showcasing local digital artists.",
        artist_name="Ana Martins",
        start_datetime=now + timedelta(days=2, hours=10),
        end_datetime=now + timedelta(days=2, hours=18),
        location="Gallery Room",
        is_active=True,
    )
    add_image(exhibition, "exhibition.png")

    palestra = Palestra.objects.create(
        title="Future of Creative Technology",
        description="A talk about technology, creativity, and new opportunities.",
        speaker_name="João Silva",
        speaker_role="Creative Director",
        company="Tech Algarve",
        start_datetime=now + timedelta(days=3, hours=14),
        end_datetime=now + timedelta(days=3, hours=15),
        location="Conference Room A",
        is_active=True,
    )
    add_image(palestra, "palestra.png")

    special_zone = SpecialZone.objects.create(
        title="Innovation Zone",
        description="A special area for experimental projects and demos.",
        featured_projects="AI Photo Booth, VR Algarve Tour, Interactive Wall",
        start_datetime=now + timedelta(days=1, hours=12),
        end_datetime=now + timedelta(days=4, hours=18),
        location="Expo Hall",
        is_active=True,
    )
    add_image(special_zone, "special-zone.png")

    speed_hunting = SpeedHunting.objects.create(
        title="Speed Hunting Sessions",
        description="Fast networking between companies and candidates.",
        company_name="Algarve Jobs Hub",
        recruiter_name="Carla Mendes",
        max_candidates=30,
        start_datetime=now + timedelta(days=4, hours=10),
        end_datetime=now + timedelta(days=4, hours=13),
        location="Networking Area",
        registration_required=True,
        is_active=True,
    )
    add_image(speed_hunting, "speed-hunting.png")

    video_screening = VideoScreening.objects.create(
        title="Short Film Screening",
        description="A selection of short films from emerging creators.",
        duration_minutes=90,
        director_name="Miguel Costa",
        start_datetime=now + timedelta(days=2, hours=20),
        end_datetime=now + timedelta(days=2, hours=21, minutes=30),
        location="Cinema Room",
        is_active=True,
    )
    add_image(video_screening, "video-screening.png")

    workshop = Workshop.objects.create(
        title="Intro to Creative Coding",
        description="A beginner-friendly workshop about coding visual experiences.",
        capacity=25,
        materials_required="Laptop, charger, notebook",
        mentor_name="Beatriz Rocha",
        start_datetime=now + timedelta(days=3, hours=10),
        end_datetime=now + timedelta(days=3, hours=12),
        location="Workshop Room B",
        registration_required=True,
        is_active=True,
    )
    add_image(workshop, "workshop.png")


def main():
    clear_database()
    seed_database()
    print("Database populated successfully!")


if __name__ == "__main__":
    main()