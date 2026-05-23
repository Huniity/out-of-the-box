import os
import sys
from datetime import timedelta, date
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
    Page,
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
    Page.objects.all().delete()


def seed_database():
    now = timezone.now()

    print("Creating sample events...")

    concert = Concert.objects.create(
        band_name="The Algarve Collective",
        description="A live concert to open the event with energy and music.",
        start_datetime=now + timedelta(days=1, hours=18),
        location="Main Stage",
        is_active=True,
    )
    add_image(concert, "concert.png")

    exhibition = Exhibition.objects.create(
        title="Digital Art Exhibition",
        area="DESIGN",
        synopsis="An exhibition showcasing local digital artists.",
        artists="Ana Martins",
        opening_hours="10:00 - 18:00",
        start_date=(now + timedelta(days=2)).date(),
        end_date=(now + timedelta(days=5)).date(),
        location="Gallery Room",
        is_active=True,
    )
    add_image(exhibition, "exhibition.png")

    palestra = Palestra.objects.create(
        title="Future of Creative Technology",
        description="A talk about technology, creativity, and new opportunities.",
        speaker_name="João Silva",
        speaker_activity="Creative Director",
        start_datetime=now + timedelta(days=3, hours=14),
        location="Conference Room A",
        is_active=True,
    )
    add_image(palestra, "palestra.png")

    palestra = Palestra.objects.create(
        title="Future of Creative Technology 2",
        description="A talk about technology, creativity, and new opportunities. 2",
        speaker_name="João Silva",
        speaker_activity="Creative Director",
        start_datetime=now + timedelta(days=3, hours=14),
        location="Conference Room B",
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
        company_name="Algarve Jobs Hub",
        start_datetime=now + timedelta(days=4, hours=10),
        location="Networking Area",
        is_active=True,
    )
    speed_hunting.company_logo.save("speed-hunting.png", ContentFile(DUMMY_IMAGE), save=True)

    video_screening = VideoScreening.objects.create(
        title="Short Film Screening",
        synopsis="A selection of short films from emerging creators.",
        duration="90 minutos",
        director_team="Miguel Costa",
        start_datetime=now + timedelta(days=2, hours=20),
        location="Cinema Room",
        is_active=True,
    )
    add_image(video_screening, "video-screening.png")

    workshop = Workshop.objects.create(
        title="Intro to Creative Coding",
        description="A beginner-friendly workshop about coding visual experiences.",
        max_participants=25,
        mentor_name="Beatriz Rocha",
        start_datetime=now + timedelta(days=3, hours=10),
        location="Workshop Room B",
        is_active=True,
    )
    add_image(workshop, "workshop.png")

    page = Page.objects.bulk_create([
        Page(name="Home", url="/", is_live=True, views=50),
        Page(name="Exhibitions", url="exhibitions", is_live=True, views=12),
        Page(name="Palestras", url="palestras", is_live=True, views=25),
        Page(name="Workshops", url="workshops", is_live=True, views=2, main_white_title="Work", main_green_title="shops", main_description="Descobre as sessões práticas da Out of the Box – Faro 2026. Explora workshops por área formativa e conhece as equipas que vão desafiar-te a aprender, criar e experimentar.", cta_button_text="Garante o teu lugar!", cta_button_link="https://docs.google.com/forms", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Video Screenings", url="projecoes", is_live=True, views=15, main_white_title="ETIC", main_green_title="EM CARTAZ", main_description="Apresentação dos projetos finais das turmas de Realização, Cinema e TV da ETIC_Algarve. Sessões abertas ao público, entrada livre.", cta_button_text="Explorar Curtas Metragens", cta_button_link="https://www.youtube.com/watch?v=z69B4lJ-sUE", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Concerts", url="concertos", is_live=True, views=12, main_white_title="Concertos", main_green_title="Live", main_description="A música ao vivo e os happenings dão ritmo ao Out of the Box. Aqui encontras o evento de abertura Live In Sight e todas as atuações dos alunos durante o festival.", cta_button_text="Live In Sight ", cta_button_link="https://www.eticalgarve.com/comunidade/live-insight/", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Speed Hunting", url="speed-hunting", is_live=True, views=13, main_white_title="Speed", main_green_title="Hunting", main_description="Encontros rápidos entre empresas e alunos da ETIC_Algarve para apresentação de portfólio, conversa profissional e criação de oportunidades.", cta_button_text="Saiba mais sobre a programação", cta_button_link="/palestras", start_event_date=date(2026, 7, 9), end_event_date=date(2026, 7, 10)),
        Page(name="Special Zones", url="semana-labia", is_live=True, views=22, main_white_title="Semana Lábia", main_green_title="2026", main_description="Uma secção dedicada aos projetos da Semana Lábia 2026, a semana intensiva e multidisciplinar de criação e aprendizagem em contexto real da ETIC_Algarve.", cta_button_text="Explora Mais", cta_button_link="https://www.eticalgarve.com/comunidade/labia/"),
])


def main():
    clear_database()
    seed_database()
    print("Database populated successfully!")


if __name__ == "__main__":
    main()