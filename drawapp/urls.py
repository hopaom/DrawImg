from django.urls import path,re_path
from . import views


urlpatterns = [
    path('', views.firstpage, name='firstpage'),
    path('upload', views.img_upload, name='upload'),
    path('test/<str:img>', views.test, name='test'),
]
