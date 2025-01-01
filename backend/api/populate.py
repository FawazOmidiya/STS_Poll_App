import requests
import django
import os
# Set up Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import Candidate, StatePollingData

BaseURL = "https://politics.api.cnn.io/results/national-races/2024-PG.json"


def get_election_results():
    response = requests.get(BaseURL)
    if response.status_code == 200:
        try:
            data = response.json()
            return data
        except ValueError as e:
            print("Error parsing JSON:", e)
            return None
    else:
        print("Error fetching data:", response.status_code, response.text)
        return None


def print_results(results):
    for race in results:
        print(f"Race: {race['stateName']}")
        print(f"Winner: {race.get('winnerBopPartyId', 'N/A')}")
        print(f"Total Votes: {race.get('totalVote', 0)}")
        print("---")


def populate_election_results():
    results = get_election_results()
    if not results:
        print("No results to process.")
        return

    for race in results:
        state_results, created = StatePollingData.objects.get_or_create(
            state=race["stateName"],
            defaults={
                "party_winner": race.get("winnerBopPartyId", "N/A"),
                "total_votes": race.get("totalVote", 0),
                "electoralVotes": race.get("electoralVotes").get("electoralVotesAtStake", 0),
            }
        )
        if not created:  # Update existing state result
            state_results.party_winner = race.get("winnerBopPartyId", "N/A")
            state_results.total_votes = race.get("totalVote", 0)
            state_results.electoralVotes = race.get("electoralVotes").get("electoralVotesAtStake", 0)
            state_results.save()

        for candidate in race.get("candidates", []):
            
            candidate_obj = Candidate.objects.create(
                name=candidate["fullName"],
                party=candidate.get("majorParty", "Unknown"),
                voteNum = candidate.get("voteNum", 0),
                votePcnt = candidate.get("votePercentNum", 0.0),
            )

            state_results.candidates.add(candidate_obj)

        state_results.save()

    print("Database populated successfully!")


if __name__ == "__main__":
    results = get_election_results()
    if results:
        print_results(results)
        populate_election_results()
