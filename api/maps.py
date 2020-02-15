import requests

def getDistance(origin, destination):
    gmaps = 'AIzaSyDAqD-R2xJpUUlmOi0xLsCAZAc3aNmzMjs'
    url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins={}&destinations={}&key={}'.format(origin, destination, gmaps)
    response = requests.get(url)
    output = response.json()

    print(output)
    distance = int(int(output["rows"][0]["elements"][0]["distance"]["value"])*0.000621371192)

    return distance
