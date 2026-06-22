from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0024_speedhunting_company_facebook_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='sunsettalks',
            name='priority',
            field=models.IntegerField(default=0, help_text='Prioridade de destaque (maior = aparece primeiro)'),
        ),
        migrations.AddField(
            model_name='concertos',
            name='priority',
            field=models.IntegerField(default=0, help_text='Prioridade de destaque (maior = aparece primeiro)'),
        ),
        migrations.AddField(
            model_name='workshops',
            name='priority',
            field=models.IntegerField(default=0, help_text='Prioridade de destaque (maior = aparece primeiro)'),
        ),
        migrations.AddField(
            model_name='cinema',
            name='priority',
            field=models.IntegerField(default=0, help_text='Prioridade de destaque (maior = aparece primeiro)'),
        ),
        migrations.AddField(
            model_name='exposicoes',
            name='priority',
            field=models.IntegerField(default=0, help_text='Prioridade de destaque (maior = aparece primeiro)'),
        ),
    ]
