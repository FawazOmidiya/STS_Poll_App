from rest_framework import serializers
from .models import PollingData, StatePollingData, Candidate

class PollingDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PollingData
        fields = '__all__'
from .models import Candidate, StatePollingData

class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ["fullName","firstName","lastName", "party", "voteNum", "votePcnt"]

class StatePollingDataSerializer(serializers.ModelSerializer):
    candidates = CandidateSerializer(many=True)  # Serialize nested candidates

    class Meta:
        model = StatePollingData
        fields = ["state", "party_winner", "total_votes", "electoralVotes", "candidates"]