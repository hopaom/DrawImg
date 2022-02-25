from tokenize import Name
from django.contrib import admin
from django.urls import path, include
from pipo import views

urlpatterns = [
        path('pipo/', views.pipo, name='pipo')
    ]
