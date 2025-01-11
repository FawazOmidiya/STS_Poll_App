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
    fullName = models.CharField(max_length=100, default="Unknown Candidate")  # Increased length for full names
    firstName = models.CharField(max_length=50, blank=True, null=True)  # Optional field
    lastName = models.CharField(max_length=50, blank=True, null=True)  # Optional field
    party = models.CharField(max_length=50)
    voteNum = models.IntegerField(default=0)  # Default added for robustness
    votePcnt = models.FloatField(default=0.0)  # Default added for robustness
    fill = models.CharField(max_length=50, default="var(--color-Unknown)")  # Default color for unknown parties

    def __str__(self):
        return f"{self.fullName} ({self.party})"


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
