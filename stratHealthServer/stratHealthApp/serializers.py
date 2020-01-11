from django.contrib.auth.models import User, Group
from .models import HospitalGroup, Hospital, Contact, ProcedureCategory, Procedures, Staff
from rest_framework import serializers


class HospitalGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = HospitalGroup
        fields = "__all__"


class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class ProcedureCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProcedureCategory
        fields = "__all__"


class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = "__all__"


class ProceduresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Procedures
        fields = "__all__"
