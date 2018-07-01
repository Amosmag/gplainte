# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-01-17 13:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('utilisateur', '0003_user_profession'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='photo',
            field=models.ImageField(null=True, upload_to='photos/', verbose_name='photo'),
        ),
        migrations.AddField(
            model_name='user',
            name='photo_name',
            field=models.CharField(max_length=100, null=True, verbose_name='photo_name'),
        ),
    ]
