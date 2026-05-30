from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0016_sunsettalks_category_sunsettalks_category_other'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exposicoes',
            old_name='area',
            new_name='category',
        ),
        migrations.AlterField(
            model_name='exposicoes',
            name='category',
            field=models.CharField(
                blank=True,
                null=True,
                max_length=50,
                choices=[
                    ('DESIGN', 'Design'),
                    ('FOTO', 'Fotografia'),
                    ('MARKETING', 'Marketing'),
                    ('PW', 'Programação'),
                    ('SOM', 'Som'),
                    ('VIDEO', 'Vídeo'),
                    ('JOGOS', 'Videojogos'),
                    ('CINEMA', 'Cinema / TV'),
                    ('OUTROS', 'Outros'),
                ],
            ),
        ),
    ]
