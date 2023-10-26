from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import RecipViewSet, ListCategory

router = DefaultRouter()
router.register('recipe', RecipViewSet, basename='recipe')

urlpatterns = [
    path('', include(router.urls)),
    path('categories/', ListCategory.as_view(),)
]