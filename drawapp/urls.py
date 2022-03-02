from django.urls import path
from .views import firstpage, send_email, img_upload, drawpage, select_style

urlpatterns=[
    path('', firstpage, name = "home"),
    path('email/', send_email, name = 'email'),
    path('upload', img_upload, name='upload'),
    path('drawpage/', drawpage, name='drawpage'),
    path('select/<str:where>/<str:img>', select_style, name='select_style'),
]
