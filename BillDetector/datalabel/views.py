from django.shortcuts import render
# from django.core.files.storage import FileSystemStorage
# from .forms import DataForm


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import DataLabel
from .serializers import GetAllDataSerializers

class GetAllDataAPIView(APIView):
    def get(self, request):
        listData = DataLabel.objects.all()
        my_data = GetAllDataSerializers(listData, many=True)
        return Response(data = my_data.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        name = request.data['name']
        image = request.data['image']
        label = request.data['label']
        daya = DataLabel.objects.create(name=name, image=image, label=label)
        return Response(name, status=status.HTTP_200_OK)