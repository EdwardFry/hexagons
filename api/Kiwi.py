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

    #
    #
    #     min_duration_route_index = route_lengths_minutes.index(min(route_lengths_minutes))
    #
    #     legs = output["data"][min_duration_route_index]["route"]
    #     no_legs=len(legs)
    #
    #     routes = []
    #
    #     for i in range(no_legs):
    #         cityTo = legs[i]["cityTo"]
    #         cityFrom = legs[i]["cityFrom"]
    #         cityCodeTo = legs[i]["cityCodeTo"]
    #         cityCodeFrom = legs[i]["cityCodeFrom"]
    #         routes.append((cityFrom, cityTo, cityCodeFrom, cityCodeTo))


    #flight_options.append(routes)


    return routes[:min(5, len(routes))]

f = getFlightRoutes("Prague", "London", "31/05/2020")
print(f)

