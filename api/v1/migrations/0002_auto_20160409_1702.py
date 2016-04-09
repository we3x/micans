# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('v1', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tiket',
            name='stanje',
            field=models.CharField(max_length=20, default='ne_isporuceno'),
        ),
    ]
