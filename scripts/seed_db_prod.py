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
    Page,
)


def seed_database():
    print("Creating sample events...")

    def dt(day, hour, minute=0):
        return timezone.make_aware(datetime(2026, 7, day, hour, minute))


    page = Page.objects.bulk_create([
        Page(name="Exposições",  is_live=True,  main_white_title="A Obra Ganha", main_green_title="Vida", main_description="Descobre as exposições que revelam o talento e a criatividade dos alunos das áreas de Design, Fotografia e Videojogos.", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Sunset Talks", is_live=True, main_white_title="As Grandes", main_green_title="Vozes", main_description="Conecta-te com os profissionais que estão a ditar o rumo da indústria. Explora as palestras, workshops e debates do Out of the Box 2026.", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Programação", is_live=True, main_white_title="Ideias Em", main_green_title="Movimento", main_description="A criatividade tem hora marcada, mas não tem limites. Explora o fluxo completo de atividades, debates e performances que vão transformar o teu dia.", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Workshops", is_live=True, main_white_title="Work", main_green_title="shops", main_description="Descobre as sessões práticas da Out of the Box Faro 2026. Explora workshops por área formativa e conhece as equipas que vão desafiar-te a aprender, criar e experimentar.", cta_button_text="Garante o teu lugar!", cta_button_link="https://docs.google.com/forms", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Cinema", is_live=True, main_white_title="ETIC", main_green_title="EM CARTAZ", main_description="Apresentação dos projetos finais das turmas de Realização, Cinema e TV da ETIC_Algarve. Sessões abertas ao público, entrada livre.", cta_button_text="Explorar Curtas Metragens", cta_button_link="https://www.youtube.com/watch?v=z69B4lJ-sUE", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Concertos", is_live=True, main_white_title="Concertos", main_green_title="Live", main_description="A música ao vivo e os happenings dão ritmo ao Out of the Box. Aqui encontras o evento de abertura Live In Sight e todas as atuações dos alunos durante o festival.", cta_button_text="Live In Sight ", cta_button_link="https://www.eticalgarve.com/comunidade/live-insight/", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Speed Hunting", is_live=True, main_white_title="Speed", main_green_title="Hunting", main_description="Encontros rápidos entre empresas e alunos da ETIC_Algarve para apresentação de portfólio, conversa profissional e criação de oportunidades.", cta_button_text="Saiba mais sobre a programação", cta_button_link="/programacao", start_event_date=date(2026, 7, 9), end_event_date=date(2026, 7, 10)),
        # Page(name="Semana Lábia", is_live=True, main_white_title="Semana Lábia", main_green_title="2026", main_description="Uma secção dedicada aos projetos da Semana Lábia 2026, a semana intensiva e multidisciplinar de criação e aprendizagem em contexto real da ETIC_Algarve.", cta_button_text="Explora Mais", cta_button_link="https://www.eticalgarve.com/comunidade/labia/"),
])


def main():
    seed_database()
    print("Database populated successfully!")


if __name__ == "__main__":
    main()