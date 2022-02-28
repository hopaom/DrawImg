from django.urls import path
from .views import index_test, send_email, email_test, nst_test,style_upload

urlpatterns=[
    path('', index_test),
    path('email/', send_email, name = 'email'),
    path('email_test/', email_test),
    path('nst_test/', nst_test),
    path('style/', style_upload),
]