from django.contrib import admin
from .models import Course,Technology,NameNumber
# Register your models here.

admin.site.register(Course)
admin.site.register(Technology)
admin.site.register(NameNumber)