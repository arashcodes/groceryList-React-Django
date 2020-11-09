from django.contrib import admin 
from django.urls import path, include 
from django.conf.urls import url 
from grocery.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('list/', ReactView.as_view(), name="something"),
    path('add/', ReactView.as_view(), name="something"),
]
