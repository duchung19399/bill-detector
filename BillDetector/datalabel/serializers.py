from rest_framework import serializers
from .models import DataLabel

class GetAllDataSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = DataLabel
        fields = ('name', 'image',)