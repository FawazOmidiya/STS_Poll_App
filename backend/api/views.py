from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import PollingData, StatePollingData
from .serializers import PollingDataSerializer, StatePollingDataSerializer
from .utils import visualizations

# Create your views here.

class PollingDataView(APIView):
    def get(self, request):
        data = PollingData.objects.all()
        serializer = PollingDataSerializer(data, many=True)
        return Response(serializer.data)

class StatePollingDataView(APIView):
    def get(self, request):
        polling_data = StatePollingData.objects.all()
        serializer = StatePollingDataSerializer(polling_data, many=True)
        return Response(serializer.data)

def polling_bar_graph(request, state_name):
    state = StatePollingData.objects.get(state=state_name)
    candidates = state.candidates.all()
    return visualizations.pollBarGraph(candidates)

def polling_pie_chart(request, state_name):
    state = StatePollingData.objects.get(state=state_name)
    candidates = state.candidates.all()
    return visualizations.pollPieChart(candidates)