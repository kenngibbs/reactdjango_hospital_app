from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import Contact, Hospital
import json


# Create your views here.
def new_contact_add(request):
    body = json.loads(request.body)

    if User.objects.filter(username=body["django_username"]).exists():
        return JsonResponse({'result': 'error', 'message': 'Username already exists'})
    else:
        new_django_user = User.objects.create_user(username = body["django_username"], email="", password=body["django_password"])
        new_contact_instance = Contact(
            contact_django_user = new_django_user,
            contact_name= body["contact_name"],
            contact_address= body["contact_address"],
            contact_phone= body["contact_phone"],
            contact_position= body["contact_position"],
        )
        new_contact_instance.save()
        new_contact_instance.contact_hospital_list.set(body["contact_hospital_list"])
        return JsonResponse({'result': 'OK'})
