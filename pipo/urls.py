from django.contrib import admin
from django.urls import path
from pipo import views

urlpatterns = [
        path('pipo/', views.pipo, name='pipo'),
    ]
