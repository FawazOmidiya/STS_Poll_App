from django.db import models

# Create your models here.
class PollingData(models.Model):
    state = models.CharField(max_length=50)
    demographic = models.CharField(max_length=50)
    percentage = models.FloatField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.state} - {self.demographic}: {self.percentage}%"