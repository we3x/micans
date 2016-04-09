from django.shortcuts import render
from rest_framework import viewsets
from v1 import serializers

class SpisakViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.SpisakSerializer
    queryset = serializer_class.Meta.model.objects.all()
