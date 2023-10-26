from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from .models import Recipe, Category
from .serializers import RecipSerializer, CategorySerializer
from rest_framework.response import Response
from rest_framework import viewsets


class RecipViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = RecipSerializer
    queryset = Recipe.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category']


class ListCategory(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()



