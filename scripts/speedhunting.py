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

from django.core.files.base import ContentFile
from django.utils import timezone

from apps.events.models import (
    SpeedHunting
)


def seed_database():
    print("Creating minimal sample data...")

# ── Speed Hunting ────────────────────────────────────────────────────────────
SpeedHunting.objects.bulk_create([
    # FLOW PRODUCTIONS
    SpeedHunting(
        company_name="FLOW PRODUCTIONS",
        company_description="",
        category="DESIGN",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),
    SpeedHunting(
        company_name="FLOW PRODUCTIONS",
        company_description="",
        category="FOTO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),
    SpeedHunting(
        company_name="FLOW PRODUCTIONS",
        company_description="",
        category="VIDEO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),

    # B16
    SpeedHunting(
        company_name="B16",
        company_description="",
        category="DESIGN",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),
    SpeedHunting(
        company_name="B16",
        company_description="",
        category="FOTO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),
    SpeedHunting(
        company_name="B16",
        company_description="",
        category="MARKETING_COMUNICACAO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),
    SpeedHunting(
        company_name="B16",
        company_description="",
        category="VIDEO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),

    # ID VISUALS
    SpeedHunting(
        company_name="ID VISUALS",
        company_description="",
        category="VIDEO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),

    # C1 BROKERS
    SpeedHunting(
        company_name="C1 BROKERS",
        company_description="",
        category="MARKETING_COMUNICACAO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),
    SpeedHunting(
        company_name="C1 BROKERS",
        company_description="",
        category="FOTO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),

    # TSS DESIGN
    SpeedHunting(
        company_name="TSS DESIGN",
        company_description="",
        category="DESIGN",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),
    SpeedHunting(
        company_name="TSS DESIGN",
        company_description="",
        category="MARKETING_COMUNICACAO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),

    # PHOTOBOOKING
    SpeedHunting(
        company_name="PHOTOBOOKING",
        company_description="",
        category="FOTO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),

    # EUROSERVICE
    SpeedHunting(
        company_name="EUROSERVICE",
        company_description="",
        category="SOM_MUSICA",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),

    # DESCOMUNAL
    SpeedHunting(
        company_name="DESCOMUNAL",
        company_description="",
        category="MARKETING_COMUNICACAO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),
    SpeedHunting(
        company_name="DESCOMUNAL",
        company_description="",
        category="DESIGN",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),

    # KOR CREATIVES
    SpeedHunting(
        company_name="KOR CREATIVES",
        company_description="",
        category="DESIGN",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),
    SpeedHunting(
        company_name="KOR CREATIVES",
        company_description="",
        category="MARKETING_COMUNICACAO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),

    # DENGUN
    SpeedHunting(
        company_name="DENGUN",
        company_description="",
        category="MARKETING",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),
    SpeedHunting(
        company_name="DENGUN",
        company_description="",
        category="PW",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),

    # ALGARVE STUDIOS
    SpeedHunting(
        company_name="ALGARVE STUDIOS",
        company_description="",
        category="VIDEO",
        start_datetime=None,
        location="Área de Networking — IPDJ, Faro",
        is_active=True,
    ),
])


def main():
    seed_database()
    print("speed hunting populated successfully!")

if __name__ == "__main__":
    main()