from django.contrib import admin
from .models import Pet, User, Follower

# Register your models here.
admin.site.register(Pet)
admin.site.register(User)
admin.site.register(Follower)

