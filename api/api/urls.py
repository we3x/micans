from django.conf.urls import include, url
from django.contrib import admin
from v1 import urls as v1_urls

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(v1_urls)),
]
