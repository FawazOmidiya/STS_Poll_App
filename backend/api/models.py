from django.db import models

# Create your models here.
class PollingData(models.Model):
    state = models.CharField(max_length=50)
    demographic = models.CharField(max_length=50)
    percentage = models.FloatField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.state} - {self.demographic}: {self.percentage}%"
    
class Candidate(models.Model):
    name = models.CharField(max_length=50)
    party = models.CharField(max_length=50)
    voteNum = models.IntegerField()
    votePcnt = models.FloatField()
    
    def __str__(self):
        return f"{self.name} ({self.party})"

class StatePollingData(models.Model):
    state = models.CharField(max_length=50)
    party_winner = models.CharField(max_length=50)
    total_votes = models.IntegerField()
    electoralVotes = models.IntegerField()
    candidates = models.ManyToManyField(Candidate, related_name="states")

    def __str__(self):
        return f"{self.state}"
    
    def getWinningCandidate(self):
        for candidate in self.candidates:
            if candidate.party == self.party_winner:
                return candidate
