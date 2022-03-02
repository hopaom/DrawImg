<<<<<<< HEAD

from django.urls import path
from .views import firstpage, send_email, email_test, nst_test, img_upload, test, drawpage
=======
from django.urls import path
from .views import firstpage, send_email, img_upload, drawpage, select_style
>>>>>>> 7309de61eca967f352f8326c1ba7af4e88eedca4

urlpatterns=[
    path('', firstpage, name = "home"),
    path('email/', send_email, name = 'email'),
<<<<<<< HEAD
    path('email_test/', email_test),
    path('nst_test/', nst_test),
    path('upload', img_upload, name='upload'),
    path('test/<str:where>/<str:img>', test, name='test'),
    path('drawpage/', drawpage, name='drawpage'),
=======
    path('upload', img_upload, name='upload'),
    path('drawpage/', drawpage, name='drawpage'),
    path('select/<str:where>/<str:img>', select_style, name='select_style'),
>>>>>>> 7309de61eca967f352f8326c1ba7af4e88eedca4
]
