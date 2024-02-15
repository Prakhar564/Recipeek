from django.shortcuts import render
from django.http import HttpResponse
# from rest_framework import viewsets, permissions
from .models import *

def home(request):
    return HttpResponse("Home page")

# class ProjectViewset(viewsets.Viewset):
#     permission_class = [permissions.AllowAny]
#     # queryset = 