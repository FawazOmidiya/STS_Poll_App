import requests

API_KEY = 'AIzaSyCOTVvrMOHC3wpucx5BMdfTgPdW-8rqs3k'
BASE_URL = "https://www.googleapis.com/civicinfo/v2"

def get_elections():
    url = f"{BASE_URL}/elections?key={API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data.get("elections", [])
    else:
        print("Error:", response.status_code, response.text)
        return []

# Fetch and print elections
elections = get_elections()
for election in elections:
    print(f"{election['id']}: {election['name']} on {election['electionDay']}")
    print(election)
    
def get_voter_info(address):
    url = f"{BASE_URL}/voterinfo?key={API_KEY}&address={address}"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        print("Error:", response.status_code, response.text)
        return None

# Example usage
address = "1600 Pennsylvania Ave NW, Washington, DC 20500"
voter_info = get_voter_info(address)
print(voter_info)
