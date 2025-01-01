from io import BytesIO
from django.http import HttpResponse
import matplotlib
matplotlib.use('Agg')  # Use a non-GUI backend
import matplotlib.pyplot as plt

def pollBarGraph(candidates):
    # Extract data from candidates
    labels = [candidate.name for candidate in candidates]
    votes = [candidate.voteNum for candidate in candidates]

    # Create the bar graph
    fig, ax = plt.subplots()
    ax.bar(labels, votes, color='blue')
    ax.set_ylabel('Votes')
    ax.set_title('Polling Results')
    plt.xticks(rotation=45, ha='right')

    # Save the graph to a BytesIO object
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    plt.close()

    # Return the graph as an HTTP response
    return HttpResponse(buffer, content_type='image/png')


def pollPieChart(candidates):
    # Extract data from candidates
    labels = [candidate.name for candidate in candidates]
    votes = [candidate.voteNum for candidate in candidates]

    # Create the pie chart
    fig, ax = plt.subplots()
    ax.pie(votes, labels=labels, autopct='%1.1f%%', shadow=True, startangle=90)
    ax.set_title('Polling Results')

    # Save the graph to a BytesIO object
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    plt.close()

    # Return the graph as an HTTP response
    return HttpResponse(buffer, content_type='image/png')
