# Generated by Django 3.2.11 on 2022-01-16 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrap', '0005_linkedinprofile_profile_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='linkedinprofile',
            name='profile_url',
            field=models.URLField(),
        ),
    ]
