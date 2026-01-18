from django.urls import path
from .views import donation_list

urlpatterns = [
    path('api/donations/', donation_list),
]
