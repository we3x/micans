# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Spisak',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('ime', models.CharField(max_length=32)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Tiket',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('ime', models.CharField(max_length=32)),
                ('prezime', models.CharField(max_length=32)),
                ('adresa', models.CharField(max_length=50)),
                ('kolicina', models.CharField(max_length=7)),
                ('napomena', models.TextField()),
                ('stanje', models.CharField(max_length=20)),
                ('spisak', models.ForeignKey(to='v1.Spisak')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
