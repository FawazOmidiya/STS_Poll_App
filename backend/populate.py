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
        state_results, created = StatePollingData.objects.update_or_create(
            state=race["stateName"],
            defaults={
                "party_winner": race.get("winnerBopPartyId", "N/A"),
                "total_votes": race.get("totalVote", 0),
                "electoralVotes": race.get("electoralVotes", {}).get("electoralVotesAtStake", 0),
            }
        )
        
        existing_candidates = {candidate.fullName: candidate for candidate in state_results.candidates.all()}
        for candidate_data in race.get("candidates", []):
            full_name = candidate_data["fullName"]
            if full_name in existing_candidates:
                # Update existing candidate
                candidate_obj = existing_candidates[full_name]
                candidate_obj.voteNum = candidate_data.get("voteNum", 0)
                candidate_obj.votePcnt = candidate_data.get("votePercentNum", 0.0)
                candidate_obj.fill = "var(--color-" + str(candidate_data.get("majorParty", "Unknown")),
                candidate_obj.save()
            else:
                # Create new candidate
                candidate_obj = Candidate.objects.create(
                    fullName=full_name,
                    firstName=candidate_data.get("firstName", ""),
                    lastName=candidate_data.get("lastName", ""),
                    party=candidate_data.get("majorParty", "Unknown"),
                    voteNum=candidate_data.get("voteNum", 0),
                    votePcnt=candidate_data.get("votePercentNum", 0.0),
                    fill = "var(--color-" + str(candidate_data.get("majorParty", "Unknown")),
                )
                state_results.candidates.add(candidate_obj)

        # Save StatePollingData after processing candidates
        state_results.save()

    print("Database populated successfully!")


if __name__ == "__main__":
    results = get_election_results()
    if results:
        print_results(results)
        populate_election_results()
