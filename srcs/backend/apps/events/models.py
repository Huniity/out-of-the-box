from django.db import models



class Page(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    url = models.CharField(max_length=255, unique=True)
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
    AREA_CHOICES = [
        ('DESIGN', 'Design'),
        ('FOTO', 'Fotografia'),
        ('GAMES', 'Videojogos'),
        ('LABIA', 'Espaço Lábia'),
    ]
    
    title = models.CharField(max_length=255)
    area = models.CharField(max_length=10, choices=AREA_CHOICES, default='DESIGN')
    synopsis = models.TextField(help_text="Sinopse da exposição")
    artists = models.TextField(help_text="Identificação dos artistas")
    image = models.ImageField(upload_to='exposicoes/')
    
    opening_hours = models.CharField(max_length=255, help_text="Ex: 09:00 - 18:00 (Flexível IPDJ)")
    start_date = models.DateField()
    end_date = models.DateField()
    
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"[{self.area}] {self.title}"

class Palestras(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    speaker_name = models.CharField(max_length=255)
    speaker_activity = models.CharField(max_length=255, help_text="Atividade/Cargo")
    
    speaker_info_link = models.URLField(blank=True, null=True, help_text="Link para + info")
    social_link = models.URLField(blank=True, null=True, help_text="Rede social ou Site")
    registration_link = models.URLField(blank=True, null=True, help_text="Link para inscrição")
    
    image = models.ImageField(upload_to='palestras/')
    start_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class Workshops(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    mentor_name = models.CharField(max_length=255)
    mentor_social = models.URLField(blank=True, null=True)
    
    duration = models.CharField(max_length=100, help_text="Ex: 2 horas")
    max_participants = models.IntegerField()
    registration_link = models.URLField(blank=True, null=True)
    
    image = models.ImageField(upload_to='workshops/')
    start_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class Projecoes(models.Model):
    title = models.CharField(max_length=255)
    director_team = models.CharField(max_length=255, help_text="Realizador/Equipa")
    synopsis = models.TextField()
    
    duration = models.CharField(max_length=100)
    social_link = models.URLField(blank=True, null=True, help_text="Rede social do realizador/projeto")
    
    image = models.ImageField(upload_to='projecoes/')
    start_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class Concertos(models.Model):
    band_name = models.CharField(max_length=255)
    description = models.TextField(help_text="Descrição da banda")
    info_link = models.URLField(blank=True, null=True)
    social_link = models.URLField(blank=True, null=True)
    
    image = models.ImageField(upload_to='concertos/')
    start_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.band_name

class SpeedHunting(models.Model):
    company_name = models.CharField(max_length=255)
    company_logo = models.ImageField(upload_to='speed_hunting/logos/')
    
    start_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.company_name


class SemanaLabia(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    featured_projects = models.TextField()
    image = models.ImageField(upload_to='semana_labia/')
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title