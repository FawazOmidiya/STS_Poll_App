from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import PollingData
from .serializers import PollingDataSerializer

# Create your views here.

class PollingDataView(APIView):
    def get(self, request):
        data = PollingData.objects.all()
        serializer = PollingDataSerializer(data, many=True)
        return Response(serializer.data)