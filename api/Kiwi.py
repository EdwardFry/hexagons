import requests

def convert(item):
    hours, minutes = item.split(' ')
    hours = int(hours[:-1])
    minutes = int(minutes[:-1])
    duration = hours * 60 + minutes
    return duration

def getFlightRoutes(fromPlace, toPlace, date):

    fromCountry_response = requests.get("https://api.skypicker.com/locations?term=" + fromPlace + "&location_types=airport&sort=rank")
    fromCountry_output = fromCountry_response.json()

    toCountry_response = requests.get("https://api.skypicker.com/locations?term=" + toPlace + "&location_types=airport&sort=rank")
    toCountry_output = toCountry_response.json()

    # Takes the most common airport in that city
    fromCode = fromCountry_output["locations"][0]["code"]
    toCode = toCountry_output["locations"][0]["code"]

    response = requests.get("https://api.skypicker.com/flights?flyFrom=" + fromCode + "&to=" + toCode + "&dateFrom=" + date + "&dateTo=" + date + "&partner=picky&v=3")

    output = response.json()

    routes = output['data']

    routes = sorted(routes, key=lambda x: convert(x["fly_duration"]))


    return routes[:min(5, len(routes))]

# print(routes)

# for i in range(3):
#     print(output["data"][i]["route"][0]["flyTo"])
#     print(output["data"][i]["route"][0]["flyFrom"])


def getGroundRoutes(goingFrom, goingTo, date):
    fromCountry_response = requests.get("https://api.skypicker.com/locations?term=" + goingFrom + "&locations_types=station,%20bus_station&sort=rank")
    fromCountry_output = fromCountry_response.json()

    toCountry_response = requests.get("https://api.skypicker.com/locations?term=" + goingTo + "&locations_types=station,%20bus_station&sort=rank")
    toCountry_output = toCountry_response.json()

    # Takes the most common station in that city
    fromCode = fromCountry_output["locations"][0]["code"]
    toCode = toCountry_output["locations"][0]["code"]

    response = requests.get("https://api.skypicker.com/flights?fly_from=" + fromCode + "&fly_to=" + toCode + "&v=3&vehicle_type=train,bus" + "&date_from=" + date + "&date_to=" + date + "&partner=picky")
    output = response.json();

    # numberOfRoutes = len(output)
    routes = output['data']
    routes = sorted(routes, key=lambda x: convert(x["fly_duration"]))

    # print(routes)
    return routes[:min(5, len(routes))]

def main():
    print(getGroundRoutes("paris_fr", "berlin_de", "29/02/2020"))

if __name__ == "__main__":
    main()

