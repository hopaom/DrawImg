"""DrawImg URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from ninja import NinjaAPI

from api.v1.style_router import router as style_router
from api.v1.pipo_router import router as pipo_router
from api.v1.GauGAN_router import router as gaugan_router

api= NinjaAPI()
api.add_router('/style/', style_router)
api.add_router('/pipo/', pipo_router)
api.add_router('/gaugan/', gaugan_router)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/", api.urls),
    path('', include('drawapp.urls')),
]
