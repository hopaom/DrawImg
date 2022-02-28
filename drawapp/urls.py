from django.urls import path
from . import views


urlpatterns = [
    path('drawpage/', views.drawpage, name='drawpage'),
]