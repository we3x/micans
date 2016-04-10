from django.conf.urls import patterns, url, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'spisak', views.SpisakViewSet)
router.register(r'tiket', views.TiketViewSet)

urlpatterns = patterns(
    '',
    url(
            r'^v1/',
                include(
                            router.urls,
                        ),
            ),
        );
