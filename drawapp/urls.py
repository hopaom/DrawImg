from django.urls import path
from .views import index_test, email_test

urlpatterns=[
    path('', index_test),
    path('email/', email_test),
]