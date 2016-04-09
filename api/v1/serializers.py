from rest_framework import serializers
from .models import Spisak, Tiket


class SpisakSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spisak
        fields = ('id', 'ime')
