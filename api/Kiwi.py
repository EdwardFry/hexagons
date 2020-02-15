import requests

kiwi_get_url = 'https://api.skypicker.com/flights'

response = requests.get(
    "https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3")

print(response.status_code)

output = response.json()

print(output["data"][0]["route"][0]["flyTo"])
print(output["data"][0]["route"][0]["flyFrom"])