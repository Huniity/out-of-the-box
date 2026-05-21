from django.db import models


class Page(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    url = models.CharField(max_length=255, unique=True)
    title = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    views = models.IntegerField(default=0)
    is_hidden = models.BooleanField(default=False)
    button_link = models.CharField(max_length=255, blank=True)
    button_text = models.CharField(max_length=255, blank=True)
    date = models.DateField(null=True, blank=True)


    def __str__(self):
        return self.name


class Exhibition(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    artist_name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='exhibitions/')
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Palestra(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    speaker_name = models.CharField(max_length=255)
    speaker_role = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    image = models.ImageField(upload_to='palestras/')
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Workshop(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    capacity = models.IntegerField()
    materials_required = models.TextField()
    mentor_name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='workshops/')
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    registration_required = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class VideoScreening(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    duration_minutes = models.IntegerField()
    director_name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='video_screenings/')
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Concert(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    artist_name = models.CharField(max_length=255)
    lineup = models.TextField()
    image = models.ImageField(upload_to='concerts/')
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class SpeedHunting(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    company_name = models.CharField(max_length=255)
    recruiter_name = models.CharField(max_length=255)
    max_candidates = models.IntegerField()
    image = models.ImageField(upload_to='speed_hunting/')
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    registration_required = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class SpecialZone(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    featured_projects = models.TextField()
    image = models.ImageField(upload_to='special_zones/')
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title