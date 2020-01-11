from .models import HospitalGroup, Hospital, Contact, ProcedureCategory, Procedures, Staff
from rest_framework import viewsets
from .serializers import HospitalGroupSerializer, HospitalSerializer, ContactSerializer, ProcedureCategorySerializer, ProceduresSerializer, StaffSerializer


class HospitalGroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = HospitalGroup.objects.all()
    serializer_class = HospitalGroupSerializer


class HospitalViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Hospital.objects.all()
    serializer_class = HospitalSerializer


class ContactViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ProcedureCategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = ProcedureCategory.objects.all()
    serializer_class = ProcedureCategorySerializer


class StaffViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer


class ProceduresViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Procedures.objects.all()
    serializer_class = ProceduresSerializer
