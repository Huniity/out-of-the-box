from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0018_allow_blank_required_fields'),
    ]

    operations = [
        migrations.AddField(
            model_name='sunsettalks',
            name='area',
            field=models.CharField(blank=True, choices=[('ANIMACAO_VIDEOJOGOS', 'Animação e Videojogos'), ('DESIGN', 'Design'), ('FOTO', 'Fotografia'), ('MARKETING_COMUNICACAO', 'Marketing & Comunicação'), ('PW', 'Programação'), ('SOM_MUSICA', 'Som & Música'), ('VIDEO', 'Vídeo'), ('VIDEOJOGOS', 'Videojogos')], max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='workshops',
            name='area',
            field=models.CharField(blank=True, choices=[('ANIMACAO_VIDEOJOGOS', 'Animação e Videojogos'), ('DESIGN', 'Design'), ('FOTO', 'Fotografia'), ('MARKETING_COMUNICACAO', 'Marketing & Comunicação'), ('PW', 'Programação'), ('SOM_MUSICA', 'Som & Música'), ('VIDEO', 'Vídeo'), ('VIDEOJOGOS', 'Videojogos')], max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='cinema',
            name='area',
            field=models.CharField(blank=True, choices=[('ANIMACAO_VIDEOJOGOS', 'Animação e Videojogos'), ('DESIGN', 'Design'), ('FOTO', 'Fotografia'), ('MARKETING_COMUNICACAO', 'Marketing & Comunicação'), ('PW', 'Programação'), ('SOM_MUSICA', 'Som & Música'), ('VIDEO', 'Vídeo'), ('VIDEOJOGOS', 'Videojogos')], max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='concertos',
            name='area',
            field=models.CharField(blank=True, choices=[('ANIMACAO_VIDEOJOGOS', 'Animação e Videojogos'), ('DESIGN', 'Design'), ('FOTO', 'Fotografia'), ('MARKETING_COMUNICACAO', 'Marketing & Comunicação'), ('PW', 'Programação'), ('SOM_MUSICA', 'Som & Música'), ('VIDEO', 'Vídeo'), ('VIDEOJOGOS', 'Videojogos')], max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='speedhunting',
            name='area',
            field=models.CharField(blank=True, choices=[('ANIMACAO_VIDEOJOGOS', 'Animação e Videojogos'), ('DESIGN', 'Design'), ('FOTO', 'Fotografia'), ('MARKETING_COMUNICACAO', 'Marketing & Comunicação'), ('PW', 'Programação'), ('SOM_MUSICA', 'Som & Música'), ('VIDEO', 'Vídeo'), ('VIDEOJOGOS', 'Videojogos')], max_length=50, null=True),
        ),
    ]
