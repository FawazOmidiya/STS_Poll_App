from rest_framework import serializers
from .models import PollingData

class PollingDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PollingData
        fields = '__all__'