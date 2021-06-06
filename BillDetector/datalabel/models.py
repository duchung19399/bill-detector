from django.db import models
from django.utils import timezone

# Create your models here.

class DataLabel(models.Model):
    name = models.CharField(default = '', max_length=255)
    image = models.ImageField(upload_to='images/')
    label = models.FileField(upload_to='labels/')
