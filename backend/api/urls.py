from django.urls import path
from .views import *
from django.contrib import admin

urlpatterns = [
    # Paths added here
    path('admin/', admin.site.urls),
    path('', home)
]