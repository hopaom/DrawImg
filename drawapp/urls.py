from django.urls import path
from .views import firstpage, send_email, email_test, nst_test, img_upload, test, drawpage, select_style

urlpatterns=[
    path('', firstpage, name = "home"),
    path('email/', send_email, name = 'email'),
    path('email_test/', email_test),
    path('nst_test/', nst_test),
    path('upload', img_upload, name='upload'),
    path('test/<str:where>/<str:img>', test, name='test'),
    path('drawpage/', drawpage, name='drawpage'),
    path('select', select_style, name='select_style'),
]
