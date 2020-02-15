import os
import json
import requests
api_token="5806ae3e127469219fe78b7006768ecfe982b9f2"
header = "Authorization: Bearer " + api_token

# Inputs-- Travel: 'transitRail', 'bus', 'anyFlight'
#          Country: 'usa', 'gbr', 'def' (other)
#          Miles
# Outputs-- Carbon footprint
def carbonFootprint(travel, miles, country):
    url='https://api.triptocarbon.xyz/v1/footprint?activity={}&activityType=miles&country={}&mode={}'.format(miles,country,travel)
    
    response = requests.get(url)
    output = response.json()

    return output['carbonFootprint']