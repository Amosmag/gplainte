# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-01-18 10:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('utilisateur', '0006_auto_20180118_1128'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.ImageField(null=True, upload_to='images/photos', verbose_name='photo'),
        ),
    ]
