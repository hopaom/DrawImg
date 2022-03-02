from django.contrib import admin
from django.urls import path
from pipo import views

urlpatterns = [
        path('pipo/<str:idx>/<str:img>', views.pipo, name='pipo'),
    ]
