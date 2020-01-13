from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .models import Contact, Hospital, Staff, Procedures
import json


# Create your views here.
def login_auth(request):
    body = json.loads(request.body)
    is_user_authenticated=authenticate(username=body["django_username"], password=body["django_password"])
    print(is_user_authenticated)
    if is_user_authenticated:
        logged_in_user = User.objects.get(username=body["django_username"])
        logged_in_contact_instance = Contact.objects.get(contact_django_user=logged_in_user)
        hospital_list = logged_in_contact_instance.contact_hospital_list.all()

        # Staff Average, highest paid staff, highest procedure cost, and average procedure cost
        total_salary_for_each_hospital = 0

        hospital_info_list = {}  # Used for the dictionary
        # hospital_info_list = []  # Used for the list (array)

        # Iterate through the list of all hospitals associated with the logged in contact
        for eachHospital in hospital_list:
            highest_paid_staff_instance = 0

            # Get a list of all staff associated with the hospital
            staff_of_each_hospital = Staff.objects.filter(staff_hospital_list = eachHospital)
            # Initializing the highest paid staff with the first employee
            if len(staff_of_each_hospital) > 0:
                highest_paid_staff_instance = staff_of_each_hospital[0]

            # Get the total salary and check for the highest paid employee of the staff
            for eachStaff in staff_of_each_hospital:
                total_salary_for_each_hospital += eachStaff.staff_salary
                if highest_paid_staff_instance.staff_salary < eachStaff.staff_salary:
                    highest_paid_staff_instance = eachStaff
            print(eachHospital.hospital_name)
            # Get the procedures for each hospital
            total_procedure_cost = 0
            highest_cost_procedure = 0
            procedures_of_each_hospital = Procedures.objects.filter(procedure_hospital=eachHospital)

            if len(procedures_of_each_hospital) > 0:
                highest_cost_procedure = procedures_of_each_hospital[0].procedure_cost
            for eachProcedure in procedures_of_each_hospital:
                print(eachProcedure.procedure_name)
                total_procedure_cost += eachProcedure.procedure_cost
                if highest_cost_procedure < eachProcedure.procedure_cost:
                    highest_cost_procedure = eachProcedure.procedure_cost

            if len(staff_of_each_hospital) > 0:
                salary_average = total_salary_for_each_hospital/len(staff_of_each_hospital)
            else:
                salary_average = 0
            if len(procedures_of_each_hospital) > 0:
                avg_procedure_cost = total_salary_for_each_hospital/len(staff_of_each_hospital)
            else:
                avg_procedure_cost = 0

            print(highest_cost_procedure)
            print(avg_procedure_cost)

            # Dictionary of all hospitals with their information provided.
            hospital_info_list[eachHospital.hospital_name] = {
                "hospital_address": eachHospital.hospital_address,
                "salary_average": salary_average,
                "highest_paid_staff": highest_paid_staff_instance.staff_name,
                "avg_procedure_cost": avg_procedure_cost,
                "highest_cost_procedure": highest_cost_procedure,
                "number_of_procedures": len(procedures_of_each_hospital),
            }

            # A list(array) of hospital objects with it's necessary information. Same information as above.
            # Couldn't decided on which one to use.

            # hospital_info_list.append({
            #     "hospital_address": eachHospital.hospital_address,
            #     "salary_average": salary_average,
            #     "highest_paid_staff": highest_paid_staff_instance.staff_name,
            #     "avg_procedure_cost": avg_procedure_cost,
            #     "highest_cost_procedure": highest_cost_procedure,
            #     "number_of_procedures": len(procedures_of_each_hospital),
            # })
            total_salary_for_each_hospital = 0

        print(hospital_info_list)
        return JsonResponse(
            {
                'result': 'true',
                'username': body["django_username"],
                "hospital_info": hospital_info_list,
            })    
    else:
        return JsonResponse({'result': 'false', 'message': 'Username or password is incorrect'})


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
