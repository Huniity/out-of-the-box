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

    for title, description, speaker_name, speaker_activity, day, hour, minute, location in [
        ('O Futuro do Design é Humano',         'Uma reflexão sobre o papel do design num mundo cada vez mais tecnológico e sobre como a empatia e a criatividade continuam a ser essenciais.', 'Inês Almeida',                          'Designer & Art Director',  25,  10,  0, 'SALA 1'),
        ('O Futuro do Design é Humano',         'Uma reflexão sobre o papel do design num mundo cada vez mais tecnológico e sobre como a empatia e a criatividade continuam a ser essenciais.', 'Inês Almeida',                          'Designer & Art Director',  3,  10,  0, 'SALA 1'),
        ('Motion Design com Propósito',         'Workshop prático sobre storytelling visual, animação e ferramentas para criar impacto.',                                                     'Rui Tomás',                             'Motion Designer',          3,  11, 30, 'SALA 2'),
        ('Criar Marcas que Ficam',              'Como construir identidades visuais com significado e fazer marcas que deixam marca.',                                                        'Tiago Gouveia',                         'Brand Strategist',         3,  14,  0, 'SALA 3'),
        ('Criatividade sem Fronteiras',         'Uma conversa sobre processos criativos, colaboração e o impacto da educação no futuro.',                                                    'Marta Nunes · João Correia · Inês Lopes','Mesa Redonda',             3,  15, 45, 'SALA 4'),
        ('Fotografia de Produto',               'Técnicas e setup para fotografar produtos de forma profissional com equipamento acessível.',                                                'Ana Sofia Ferreira',                    'Fotógrafa Comercial',      4,  10,  0, 'SALA 2'),
        ('Do Algarve para o Mundo',             'Como construir uma carreira criativa internacional sem sair do Algarve.',                                                                   'Carlos Nobre',                          'Empreendedor Digital',     4,  14, 30, 'SALA 2'),
        ('Game Design do Zero',                 'O processo de criação de um videojogo, desde o conceito inicial até ao lançamento.',                                                        'Filipe Guerreiro',                      'Game Designer',            5,  11,  0, 'SALA 3'),
        ('Som e Identidade de Marca',           'Como o som define marcas, emoções e experiências. Workshop prático com ferramentas básicas.',                                               'Luísa Marques',                         'Sound Designer',           5,  15,  0, 'SALA 4'),
        ('Ilustração e Mercado Editorial',      'Percurso na ilustração editorial e como chegar ao mercado de livros e revistas.',                                                           'Beatriz Cruz',                          'Ilustradora',              6,  10, 30, 'SALA 2'),
        ('Edição de Vídeo Avançada',            'Fluxos de trabalho profissionais em DaVinci Resolve e After Effects.',                                                                      'Marco Faria',                           'Editor de Vídeo',          6,  14,  0, 'SALA 2'),
        ('UX/UI no Mercado Real',               'Da teoria ao projeto: como funciona o processo de design de produto em empresas tech.',                                                     'Vanessa Monteiro',                      'Product Designer',         7,  10,  0, 'SALA 3'),
        ('O Futuro das Profissões Criativas',   'Debate sobre as tendências do mercado e as competências que as empresas procuram.',                                                         'Ricardo Santos · Cláudia Leal',         'Mesa Redonda',             7,  15, 30, 'SALA 4'),
        ('Produção Musical para Imagem',        'Criação de trilhas sonoras e sound design para vídeo, publicidade e experiências.',                                                         'DJ Marcos',                             'Produtor Musical',         8,  11,  0, 'SALA 5'),
        ('Arquitectura de Marca Digital',       'Como as marcas se constroem no digital e o papel do design em cada ponto de contacto.',                                                    'Joana Pereira',                         'Brand Strategist',         8,  16,  0, 'SALA 6'),
        ('Fotografia Documental',               'Ética, técnica e oportunidades na fotografia documental e reportagem.',                                                                     'Pedro Tavares',                         'Fotógrafo Documental',     11, 10,  0, 'SALA 7'),
        ('Narrativa Visual em Banda Desenhada', 'Estrutura narrativa, storyboard e composição visual na banda desenhada.',                                                                   'Sofia Matos',                           'Ilustradora & BD',         11, 14, 30, 'SALA 8'),
    ]:
        p = Palestra.objects.create(
            title=title,
            description=description,
            speaker_name=speaker_name,
            speaker_activity=speaker_activity,
            start_datetime=timezone.make_aware(datetime(2026, 7, day, hour, minute)),
            location=location,
            is_active=True,
        )
        add_image(p, 'palestra.png')

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
        Page(name="Palestras", url="palestras", is_live=True, views=25, main_white_title="As Grandes", main_green_title="Vozes", main_description="Conecta-te com os profissionais que estão a ditar o rumo da indústria. Explora as palestras, workshops e debates do Out of the Box 2026.", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Workshops", url="workshops", is_live=True, views=2, main_white_title="Work", main_green_title="shops", main_description="Descobre as sessões práticas da Out of the Box Faro 2026. Explora workshops por área formativa e conhece as equipas que vão desafiar-te a aprender, criar e experimentar.", cta_button_text="Garante o teu lugar!", cta_button_link="https://docs.google.com/forms", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
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