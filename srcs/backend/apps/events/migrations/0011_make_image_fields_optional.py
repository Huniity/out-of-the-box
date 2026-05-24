from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0010_remove_page_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exposicoes',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='exposicoes/'),
        ),
        migrations.AlterField(
            model_name='palestras',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='palestras/'),
        ),
        migrations.AlterField(
            model_name='workshops',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='workshops/'),
        ),
        migrations.AlterField(
            model_name='projecoes',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='projecoes/'),
        ),
        migrations.AlterField(
            model_name='concertos',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='concertos/'),
        ),
        migrations.AlterField(
            model_name='speedhunting',
            name='company_logo',
            field=models.ImageField(blank=True, null=True, upload_to='speed_hunting/logos/'),
        ),
        migrations.AlterField(
            model_name='semanalabia',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='semana_labia/'),
        ),
    ]
