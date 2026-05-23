from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0005_rename_cta_button_link_page_button_link_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='page',
            old_name='title',
            new_name='main_title',
        ),
        migrations.RenameField(
            model_name='page',
            old_name='description',
            new_name='main_description',
        ),
        migrations.RenameField(
            model_name='page',
            old_name='date',
            new_name='event_date',
        ),
        migrations.RenameField(
            model_name='page',
            old_name='button_link',
            new_name='cta_button_link',
        ),
        migrations.RenameField(
            model_name='page',
            old_name='button_text',
            new_name='cta_button_text',
        ),
        migrations.RemoveField(
            model_name='page',
            name='is_hidden',
        ),
        migrations.AddField(
            model_name='page',
            name='is_live',
            field=models.BooleanField(default=True),
        ),
    ]
