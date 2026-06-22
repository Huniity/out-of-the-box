from django.db import models

CATEGORY_CHOICES = [
    ('DESIGN', 'Design'),
    ('FOTO', 'Fotografia'),
    ('MARKETING', 'Marketing'),
    ('PW', 'Programação'),
    ('SOM', 'Som'),
    ('VIDEO', 'Vídeo'),
    ('JOGOS', 'Videojogos'),
    ('CINEMA', 'Cinema / TV'),
    ('OUTROS', 'Outros')
]

COURSE_AREA_CHOICES = [
    ('ANIMACAO_VIDEOJOGOS', 'Animação e Videojogos'),
    ('DESIGN', 'Design'),
    ('FOTO', 'Fotografia'),
    ('MARKETING_COMUNICACAO', 'Marketing & Comunicação'),
    ('PW', 'Programação'),
    ('SOM_MUSICA', 'Som & Música'),
    ('VIDEO', 'Vídeo'),
    ('VIDEOJOGOS', 'Videojogos'),
]


class Page(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    main_white_title = models.CharField(max_length=255, blank=True)
    main_green_title = models.CharField(max_length=255, blank=True)
    main_description = models.TextField(blank=True)
    views = models.IntegerField(default=0)
    is_live = models.BooleanField(default=True)
    cta_button_link = models.CharField(max_length=255, blank=True)
    cta_button_text = models.CharField(max_length=255, blank=True)
    start_event_date = models.DateField(null=True, blank=True)
    end_event_date = models.DateField(null=True, blank=True)


    def __str__(self):
        return self.name



class Exposicoes(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, blank=True, null=True)
    synopsis = models.TextField(help_text="Sinopse da exposição")
    artists = models.TextField(help_text="Identificação dos artistas")
    image = models.ImageField(upload_to='exposicoes/', blank=True, null=True)

    opening_hours = models.CharField(max_length=255, blank=True, help_text="Ex: 09:00 - 18:00 (Flexível IPDJ)")
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)

    location = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    is_highlight = models.BooleanField(default=False)
    priority = models.IntegerField(default=0, help_text="Prioridade de destaque (maior = aparece primeiro)")

    def __str__(self):
        return f"[{self.category}] {self.title}"

class SunsetTalks(models.Model):
    title = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    speaker_name = models.CharField(max_length=255, blank=True)
    speaker_activity = models.CharField(max_length=255, blank=True, help_text="Atividade/Cargo")
    area = models.CharField(max_length=50, choices=COURSE_AREA_CHOICES, blank=True, null=True)

    speaker_info_link = models.URLField(blank=True, null=True, help_text="Link para + info")
    social_link = models.URLField(blank=True, null=True, help_text="Rede social ou Site")
    registration_link = models.URLField(blank=True, null=True, help_text="Link para inscrição")

    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, blank=True, null=True)
    category_other = models.CharField(max_length=100, blank=True, null=True, help_text="Preencher quando categoria for 'Outros'")

    image = models.ImageField(upload_to='sunset_talks/', blank=True, null=True)
    start_datetime = models.DateTimeField(null=True, blank=True)
    location = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    is_highlight = models.BooleanField(default=False)
    priority = models.IntegerField(default=0, help_text="Prioridade de destaque (maior = aparece primeiro)")

    def __str__(self):
        return self.title

class Workshops(models.Model):
    title = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    mentor_name = models.CharField(max_length=255, blank=True)
    mentor_social = models.URLField(blank=True, null=True)
    area = models.CharField(max_length=50, choices=COURSE_AREA_CHOICES, blank=True, null=True)

    duration = models.CharField(max_length=100, blank=True, help_text="Ex: 2 horas")
    max_participants = models.IntegerField(null=True, blank=True)
    registration_link = models.URLField(blank=True, null=True)

    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, blank=True, null=True)
    start_datetime = models.DateTimeField(null=True, blank=True)
    location = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    is_highlight = models.BooleanField(default=False)
    priority = models.IntegerField(default=0, help_text="Prioridade de destaque (maior = aparece primeiro)")

    def __str__(self):
        return self.title

class Cinema(models.Model):
    title = models.CharField(max_length=255, blank=True)
    director_team = models.CharField(max_length=255, blank=True, help_text="Realizador/Equipa")
    synopsis = models.TextField(blank=True)
    area = models.CharField(max_length=50, choices=COURSE_AREA_CHOICES, blank=True, null=True)

    duration = models.CharField(max_length=100, blank=True)
    social_link = models.URLField(blank=True, null=True, help_text="Rede social do realizador/projeto")

    image = models.ImageField(upload_to='cinema/', blank=True, null=True)
    start_datetime = models.DateTimeField(null=True, blank=True)
    location = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    is_highlight = models.BooleanField(default=False)
    priority = models.IntegerField(default=0, help_text="Prioridade de destaque (maior = aparece primeiro)")

    def __str__(self):
        return self.title

class Concertos(models.Model):
    band_name = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    area = models.CharField(max_length=50, choices=COURSE_AREA_CHOICES, blank=True, null=True)
    info_link = models.URLField(blank=True, null=True)
    social_link = models.URLField(blank=True, null=True)

    image = models.ImageField(upload_to='concertos/', blank=True, null=True)
    start_datetime = models.DateTimeField(null=True, blank=True)
    location = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    is_highlight = models.BooleanField(default=False)
    priority = models.IntegerField(default=0, help_text="Prioridade de destaque (maior = aparece primeiro)")

    def __str__(self):
        return self.band_name

class SpeedHunting(models.Model):
    company_name = models.CharField(max_length=255, blank=True)
    company_logo = models.ImageField(upload_to='speed_hunting/logos/', blank=True, null=True)
    company_description = models.TextField(max_length=1500, blank=True, null=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, blank=True, null=True)
    area = models.CharField(max_length=50, choices=COURSE_AREA_CHOICES, blank=True, null=True)
    start_datetime = models.DateTimeField(null=True, blank=True)
    end_datetime = models.DateTimeField(null=True, blank=True)
    location = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    company_website = models.URLField(blank=True, null=True)
    company_linkedin = models.URLField(blank=True, null=True)
    company_facebook = models.URLField(blank=True, null=True)
    company_instagram = models.URLField(blank=True, null=True)
    def __str__(self):
        return self.company_name


class SemanaLabia(models.Model):
    title = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    featured_projects = models.TextField(blank=True)
    image = models.ImageField(upload_to='semana_labia/', blank=True, null=True)
    start_datetime = models.DateTimeField(null=True, blank=True)
    end_datetime = models.DateTimeField(null=True, blank=True)
    location = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title