from django.urls import path, include
from rest_framework import routers
from . import csrf_views
from . import views
from . import controller

router = routers.DefaultRouter()
router.register('hospital_groups', controller.HospitalGroupViewSet)
router.register('hospital', controller.HospitalViewSet)
router.register('contact', controller.ContactViewSet)
router.register('procedure_category', controller.ProcedureCategoryViewSet)
router.register('staff', controller.StaffViewSet)
router.register('procedures', controller.ProceduresViewSet)

# CSRF Practice
urlpatterns = [
    path('', include(router.urls)),

    path('new_contact_add/', views.new_contact_add, name='new_contact_add'),
    path('login_auth/', views.login_auth, name='login_auth'),

    path('csrf/', csrf_views.csrf),
    path('ping/', csrf_views.ping),

    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]