from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from v1 import serializers


class SpisakViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.SpisakSerializer
    queryset = serializer_class.Meta.model.objects.all()

    @detail_route(methods=['get'])
    def tikets(self, request, pk=None):
        spisak = self.get_object()
        tikets = spisak.tiket_set.all()
        serializer = serializers.TiketSerializer(tikets, context={'request': request}, many=True)
        return Response(serializer.data)

class TiketViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.TiketSerializer
    queryset = serializer_class.Meta.model.objects.all()
