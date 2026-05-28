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
    Concertos,
    Exposicoes,
    SunsetTalks,
    SemanaLabia,
    SpeedHunting,
    Cinema,
    Workshops,
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

    Concertos.objects.all().delete()
    Exposicoes.objects.all().delete()
    SunsetTalks.objects.all().delete()
    SemanaLabia.objects.all().delete()
    SpeedHunting.objects.all().delete()
    Cinema.objects.all().delete()
    Workshops.objects.all().delete()
    Page.objects.all().delete()


def seed_database():
    print("Creating sample events...")

    def dt(day, hour, minute=0):
        return timezone.make_aware(datetime(2026, 7, day, hour, minute))

    # ── Exposições ──────────────────────────────────────────────────────────────
    Exposicoes.objects.bulk_create([
        Exposicoes(
            title="Design Para o Futuro",
            area="DESIGN",
            synopsis="Uma exposição que explora a intersecção entre design gráfico, tipografia e tecnologia emergente. Os alunos apresentam identidades visuais, sistemas de branding e peças de comunicação que desafiam os limites do design contemporâneo.",
            artists="Mariana Costa, João Ferreira, Beatriz Lopes",
            opening_hours="10:00 - 19:00 (IPDJ, Faro)",
            start_date=date(2026, 7, 3),
            end_date=date(2026, 7, 10),
            location="Galeria Principal — IPDJ, Faro",
            is_active=True,
        ),
        Exposicoes(
            title="Foco Aberto",
            area="FOTO",
            synopsis="Uma seleção de trabalhos fotográficos que documentam a identidade do Algarve, o quotidiano urbano e retratos humanos. Explorando técnicas analógicas e digitais, os autores constroem narrativas visuais únicas.",
            artists="Pedro Tavares, Ana Sofia Ferreira, Cláudia Matos",
            opening_hours="10:00 - 18:00 (IPDJ, Faro)",
            start_date=date(2026, 7, 5),
            end_date=date(2026, 7, 14),
            location="Sala de Exposições B — IPDJ, Faro",
            is_active=True,
        ),
        Exposicoes(
            title="Game Over Reality",
            area="GAMES",
            synopsis="Jogos indie, instalações interativas e protótipos desenvolvidos pelos alunos de Videojogos. Uma viagem pelos mundos criados em Unity e Unreal Engine, onde a narrativa e o gameplay se fundem com a arte.",
            artists="Filipe Guerreiro, Sofia Matos, Rui Tomás",
            opening_hours="11:00 - 20:00 (IPDJ, Faro)",
            start_date=date(2026, 7, 7),
            end_date=date(2026, 7, 17),
            location="Espaço Digital — IPDJ, Faro",
            is_active=True,
        ),
        Exposicoes(
            title="Espaço Lábia 2026",
            area="LABIA",
            synopsis="Projetos multidisciplinares da Semana Lábia expostos ao público. Uma mostra que celebra a colaboração entre áreas formativas distintas, resultando em obras que cruzam design, som, imagem e interatividade.",
            artists="Equipas da Semana Lábia 2026",
            opening_hours="09:00 - 17:00 (IPDJ, Faro)",
            start_date=date(2026, 7, 10),
            end_date=date(2026, 7, 17),
            location="Átrio Central — IPDJ, Faro",
            is_active=True,
        ),
    ])

    # ── Sunset Talks ────────────────────────────────────────────────────────────
    SunsetTalks.objects.bulk_create([
        SunsetTalks(
            title="O Futuro do Design é Humano",
            description="Uma reflexão sobre o papel do design num mundo cada vez mais tecnológico e sobre como a empatia e a criatividade continuam a ser essenciais para criar produtos que realmente importam.",
            speaker_name="Inês Almeida",
            speaker_activity="Designer & Art Director",
            speaker_info_link="https://www.linkedin.com/in/inesalmeida",
            social_link="https://www.instagram.com/inesalmeida.design",
            registration_link="https://forms.gle/sunset-talks-1",
            category="DESIGN",
            start_datetime=dt(3, 10, 0),
            location="SALA 1 — IPDJ, Faro",
            is_active=True,
        ),
        SunsetTalks(
            title="Criar Marcas que Ficam",
            description="Como construir identidades visuais com significado e fazer marcas que deixam marca. Da estratégia ao execution, uma visão prática sobre branding num mercado saturado de imagens.",
            speaker_name="Tiago Gouveia",
            speaker_activity="Brand Strategist",
            speaker_info_link="https://www.linkedin.com/in/tiagogouveia",
            social_link="https://www.tiagogouveia.com",
            registration_link="https://forms.gle/sunset-talks-2",
            category="MARKETING",
            start_datetime=dt(5, 14, 0),
            location="SALA 2 — IPDJ, Faro",
            is_active=True,
        ),
        SunsetTalks(
            title="Som e Identidade de Marca",
            description="Como o som define marcas, emoções e experiências. Uma talk sobre sound branding, design sonoro e a ciência por trás dos jingles e assinaturas sonoras que ficam na memória.",
            speaker_name="Luísa Marques",
            speaker_activity="Sound Designer & Produtora",
            speaker_info_link="https://www.linkedin.com/in/luisamarques",
            social_link="https://soundcloud.com/luisamarques",
            registration_link="https://forms.gle/sunset-talks-3",
            category="SOM",
            start_datetime=dt(8, 11, 0),
            location="SALA 3 — IPDJ, Faro",
            is_active=True,
        ),
        SunsetTalks(
            title="Do Algarve para o Mundo",
            description="Como construir uma carreira criativa internacional sem sair do Algarve. Uma conversa honesta sobre trabalho remoto, clientes globais e a vantagem competitiva de ter raízes numa região única.",
            speaker_name="Carlos Nobre",
            speaker_activity="Empreendedor Digital",
            speaker_info_link="https://www.linkedin.com/in/carlosnobre",
            social_link="https://www.carlosnobre.pt",
            registration_link="https://forms.gle/sunset-talks-4",
            category="MARKETING",
            start_datetime=dt(11, 15, 30),
            location="SALA 4 — IPDJ, Faro",
            is_active=True,
        ),
    ])

    # ── Workshops ────────────────────────────────────────────────────────────────
    Workshops.objects.bulk_create([
        Workshops(
            title="Motion Design com Propósito",
            description="Workshop prático sobre storytelling visual, animação e ferramentas para criar impacto. Os participantes vão criar uma peça animada do zero, desde o conceito ao render final em After Effects.",
            mentor_name="Rui Tomás",
            mentor_social="https://www.instagram.com/ruitomas.motion",
            category="VIDEO",
            duration="3 horas",
            max_participants=20,
            registration_link="https://forms.gle/workshops-motion",
            start_datetime=dt(4, 10, 0),
            location="Lab Criativo A — IPDJ, Faro",
            is_active=True,
        ),
        Workshops(
            title="Fotografia de Produto",
            description="Técnicas e setup para fotografar produtos de forma profissional com equipamento acessível. Do light painting à retoque em Lightroom, aprende a criar imagens que vendem.",
            mentor_name="Ana Sofia Ferreira",
            mentor_social="https://www.instagram.com/anasofiaferreira.foto",
            category="FOTO",
            duration="2 horas 30 min",
            max_participants=15,
            registration_link="https://forms.gle/workshops-foto",
            start_datetime=dt(6, 14, 0),
            location="Estúdio de Fotografia — IPDJ, Faro",
            is_active=True,
        ),
        Workshops(
            title="Introdução ao Sound Design",
            description="Criação de efeitos sonoros, ambientes e trilhas para imagem e jogos. Utilizando Ableton Live e bibliotecas de som livres, os participantes criam a banda sonora de uma cena de 60 segundos.",
            mentor_name="DJ Marcos",
            mentor_social="https://www.instagram.com/djmarcos.sound",
            category="SOM",
            duration="2 horas",
            max_participants=18,
            registration_link="https://forms.gle/workshops-sound",
            start_datetime=dt(9, 10, 0),
            location="Estúdio de Som — IPDJ, Faro",
            is_active=True,
        ),
        Workshops(
            title="UX/UI: Do Wireframe ao Protótipo",
            description="Processo completo de design de interfaces digitais com Figma. Os participantes redesenham uma app real, aplicando princípios de usabilidade, hierarquia visual e testes de utilizador.",
            mentor_name="Vanessa Monteiro",
            mentor_social="https://www.linkedin.com/in/vanessamonteiro",
            category="DESIGN",
            duration="4 horas",
            max_participants=20,
            registration_link="https://forms.gle/workshops-ux",
            start_datetime=dt(12, 10, 0),
            location="Lab Criativo B — IPDJ, Faro",
            is_active=True,
        ),
    ])

    # ── Cinema ───────────────────────────────────────────────────────────────────
    Cinema.objects.bulk_create([
        Cinema(
            title="Último Verão",
            director_team="Miguel Costa & Turma de Cinema 2026",
            synopsis="Uma curta-metragem sobre a nostalgia do verão e as escolhas que definem quem somos. Filmada nas praias e vielas do Algarve, é um retrato íntimo da geração Z entre dois mundos.",
            duration="18 minutos",
            social_link="https://www.instagram.com/ultimoverao.film",
            start_datetime=dt(5, 21, 0),
            location="Sala de Cinema — IPDJ, Faro",
            is_active=True,
        ),
        Cinema(
            title="Silêncio em Loop",
            director_team="Sara Rodrigues",
            synopsis="Documentário experimental sobre saúde mental entre jovens criativos. Através de entrevistas e imagens de arquivo pessoal, explora o peso do perfeccionismo e a busca por autenticidade.",
            duration="24 minutos",
            social_link="https://www.instagram.com/silencioloop",
            start_datetime=dt(8, 19, 30),
            location="Sala de Cinema — IPDJ, Faro",
            is_active=True,
        ),
        Cinema(
            title="Raízes Digitais",
            director_team="Turma de Realização Audiovisual 2026",
            synopsis="Animação 2D que reimagina lendas algarvias no contexto urbano contemporâneo. Um projeto coletivo que mistura ilustração tradicional com técnicas digitais de animação frame-a-frame.",
            duration="12 minutos",
            social_link="https://www.instagram.com/raizesdigitais",
            start_datetime=dt(11, 20, 0),
            location="Sala de Cinema — IPDJ, Faro",
            is_active=True,
        ),
        Cinema(
            title="Sessão de Curtas: Talento Emergente",
            director_team="Vários Realizadores — ETIC_Algarve",
            synopsis="Programa de cinco curtas-metragens de géneros distintos — ficção, documentário, videoclipe e experimental — realizadas pelos alunos finalistas das turmas de Cinema e TV.",
            duration="75 minutos",
            social_link="https://www.eticalgarve.com",
            start_datetime=dt(15, 18, 0),
            location="Sala de Cinema — IPDJ, Faro",
            is_active=True,
        ),
    ])

    # ── Concertos ────────────────────────────────────────────────────────────────
    Concertos.objects.bulk_create([
        Concertos(
            band_name="Live In Sight",
            description="O concerto de abertura do Out of the Box 2026. Live In Sight é o projeto musical dos alunos de Som e Áudio da ETIC_Algarve — uma noite de estreias ao vivo que dá o pontapé de saída ao festival.",
            info_link="https://www.eticalgarve.com/comunidade/live-insight/",
            social_link="https://www.instagram.com/liveinsight.etic",
            start_datetime=dt(3, 21, 0),
            location="Palco Principal — IPDJ, Faro",
            is_active=True,
        ),
        Concertos(
            band_name="The Algarve Collective",
            description="Projeto de fusão entre jazz, funk e eletrónica criado por músicos do sul de Portugal. Uma performance ao vivo que combina instrumentação acústica com produção digital em tempo real.",
            info_link="https://www.thealgarvecollective.com",
            social_link="https://www.instagram.com/thealgarvecollective",
            start_datetime=dt(7, 20, 30),
            location="Palco Principal — IPDJ, Faro",
            is_active=True,
        ),
        Concertos(
            band_name="Noite em Branco",
            description="Duo de música eletrónica e voz formado por ex-alunos da ETIC_Algarve. As suas composições exploram sonoridades ambientais e letras em português que falam de identidade e território.",
            info_link="https://www.noiteembranco.pt",
            social_link="https://www.instagram.com/noiteembranco.music",
            start_datetime=dt(12, 21, 30),
            location="Palco Exterior — IPDJ, Faro",
            is_active=True,
        ),
        Concertos(
            band_name="Happening dos Alunos",
            description="Encerramento do festival com uma performance coletiva dos alunos de Som, incluindo DJ sets, produções ao vivo e colaborações surpresa com convidados especiais. Uma noite para celebrar 15 dias de criatividade.",
            info_link="https://www.eticalgarve.com",
            social_link="https://www.instagram.com/eticalgarve",
            start_datetime=dt(17, 20, 0),
            location="Palco Principal — IPDJ, Faro",
            is_active=True,
        ),
    ])

    # ── Speed Hunting ────────────────────────────────────────────────────────────
    SpeedHunting.objects.bulk_create([
        SpeedHunting(
            company_name="Pixels & Co.",
            company_description="Estúdio criativo especializado em design gráfico, branding e comunicação visual. Procura designers gráficos e motion designers para integrar a equipa de projetos digitais e de impressão.",
            category="DESIGN",
            start_datetime=dt(9, 10, 0),
            location="Área de Networking — IPDJ, Faro",
            is_active=True,
        ),
        SpeedHunting(
            company_name="Bloom Digital Agency",
            company_description="Agência de marketing digital com foco em redes sociais, SEO e campanhas pagas. À procura de talentos em marketing digital, produção de conteúdo e gestão de comunidades online.",
            category="MARKETING",
            start_datetime=dt(9, 11, 0),
            location="Área de Networking — IPDJ, Faro",
            is_active=True,
        ),
        SpeedHunting(
            company_name="SoundLab Studios",
            company_description="Estúdio de produção musical e sound design para publicidade, jogos e cinema. Recrutamos produtores musicais, sound designers e técnicos de som com experiência em DAWs profissionais.",
            category="SOM",
            start_datetime=dt(10, 10, 0),
            location="Área de Networking — IPDJ, Faro",
            is_active=True,
        ),
        SpeedHunting(
            company_name="Frame & Motion",
            company_description="Produtora de vídeo e motion graphics para marcas, eventos e plataformas digitais. Procuramos realizadores, editores de vídeo e animadores 2D/3D para projetos de curta e longa duração.",
            category="VIDEO",
            start_datetime=dt(10, 11, 0),
            location="Área de Networking — IPDJ, Faro",
            is_active=True,
        ),
    ])

    # ── Semana Lábia ─────────────────────────────────────────────────────────────
    SemanaLabia.objects.bulk_create([
        SemanaLabia(
            title="Projeto ATLAS",
            description="Uma identidade visual completa para uma marca de turismo sustentável no Algarve, desenvolvida por uma equipa multidisciplinar de Design, Fotografia e Marketing.",
            featured_projects="Branding, Fotografia Editorial, Campanha Digital",
            start_datetime=dt(6, 9, 0),
            end_datetime=dt(10, 18, 0),
            location="Lab Criativo — IPDJ, Faro",
            is_active=True,
        ),
        SemanaLabia(
            title="Projeto PULSAR",
            description="Curta-metragem documental sobre comunidades piscatórias do sotavento algarvio, produzida em colaboração entre as turmas de Cinema, Som e Design Gráfico.",
            featured_projects="Produção de Vídeo, Sound Design, Motion Graphics",
            start_datetime=dt(6, 9, 0),
            end_datetime=dt(10, 18, 0),
            location="Estúdio de Produção — IPDJ, Faro",
            is_active=True,
        ),
        SemanaLabia(
            title="Projeto NEXO",
            description="Jogo digital indie com narrativa ramificada ambientado no Algarve do séc. XX. Desenvolvido pelas turmas de Videojogos, Programação Web e Design de Comunicação.",
            featured_projects="Game Design, Concept Art, Programação, Narrativa",
            start_datetime=dt(6, 9, 0),
            end_datetime=dt(10, 18, 0),
            location="Espaço Digital — IPDJ, Faro",
            is_active=True,
        ),
        SemanaLabia(
            title="Projeto ONDA",
            description="Instalação imersiva que combina projeção mapeada, som espacial e fotografia de grande formato para recriar a experiência sensorial do oceano dentro de quatro paredes.",
            featured_projects="Projeção Mapeada, Sound Design, Fotografia Fine Art",
            start_datetime=dt(6, 9, 0),
            end_datetime=dt(10, 18, 0),
            location="Espaço de Instalações — IPDJ, Faro",
            is_active=True,
        ),
    ])

    page = Page.objects.bulk_create([
        Page(name="Exposições",  is_live=True,  main_white_title="A Obra Ganha", main_green_title="Vida", main_description="Descobre as exposições que revelam o talento e a criatividade dos alunos das áreas de Design, Fotografia e Videojogos.", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Sunset Talks", is_live=True, main_white_title="As Grandes", main_green_title="Vozes", main_description="Conecta-te com os profissionais que estão a ditar o rumo da indústria. Explora as palestras, workshops e debates do Out of the Box 2026.", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Programação", is_live=True, main_white_title="Ideias Em", main_green_title="Movimento", main_description="A criatividade tem hora marcada, mas não tem limites. Explora o fluxo completo de atividades, debates e performances que vão transformar o teu dia.", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Workshops", is_live=True, main_white_title="Work", main_green_title="shops", main_description="Descobre as sessões práticas da Out of the Box Faro 2026. Explora workshops por área formativa e conhece as equipas que vão desafiar-te a aprender, criar e experimentar.", cta_button_text="Garante o teu lugar!", cta_button_link="https://docs.google.com/forms", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Cinema", is_live=True, main_white_title="ETIC", main_green_title="EM CARTAZ", main_description="Apresentação dos projetos finais das turmas de Realização, Cinema e TV da ETIC_Algarve. Sessões abertas ao público, entrada livre.", cta_button_text="Explorar Curtas Metragens", cta_button_link="https://www.youtube.com/watch?v=z69B4lJ-sUE", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Concertos", is_live=True, main_white_title="Concertos", main_green_title="Live", main_description="A música ao vivo e os happenings dão ritmo ao Out of the Box. Aqui encontras o evento de abertura Live In Sight e todas as atuações dos alunos durante o festival.", cta_button_text="Live In Sight ", cta_button_link="https://www.eticalgarve.com/comunidade/live-insight/", start_event_date=date(2026, 7, 3), end_event_date=date(2026, 7, 17)),
        Page(name="Speed Hunting", is_live=True, main_white_title="Speed", main_green_title="Hunting", main_description="Encontros rápidos entre empresas e alunos da ETIC_Algarve para apresentação de portfólio, conversa profissional e criação de oportunidades.", cta_button_text="Saiba mais sobre a programação", cta_button_link="/programacao", start_event_date=date(2026, 7, 9), end_event_date=date(2026, 7, 10)),
        Page(name="Semana Lábia", is_live=True, main_white_title="Semana Lábia", main_green_title="2026", main_description="Uma secção dedicada aos projetos da Semana Lábia 2026, a semana intensiva e multidisciplinar de criação e aprendizagem em contexto real da ETIC_Algarve.", cta_button_text="Explora Mais", cta_button_link="https://www.eticalgarve.com/comunidade/labia/"),
])


def main():
    clear_database()
    seed_database()
    print("Database populated successfully!")


if __name__ == "__main__":
    main()