# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-01-22 10:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plainte', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='plainte',
            name='annee',
            field=models.CharField(max_length=50, null=True, verbose_name='Annee'),
        ),
        migrations.AddField(
            model_name='plainte',
            name='mois',
            field=models.CharField(max_length=50, null=True, verbose_name='Mois'),
        ),
    ]