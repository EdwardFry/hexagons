import requests

kiwi_get_url = 'https://api.skypicker.com/flights'

response = requests.get(
    "https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3")

# print(response.status_code)

output = response.json()

# print(len(output["data"]))

route_lengths=[item["fly_duration"] for item in output["data"]]

# print(route_lengths)

route_lengths_minutes = []

for item in route_lengths:
    hours, minutes = item.split(' ')
    hours = int(hours[:-1])
    minutes = int(minutes[:-1])
    duration = hours*60 + minutes
    route_lengths_minutes.append(duration)

# print(route_lengths_minutes)

min_duration_route_index = route_lengths_minutes.index(min(route_lengths_minutes))

# print(min(route_lengths_minutes))
# print(min_duration_route_index)

legs = output["data"][min_duration_route_index]["route"]
no_legs=len(legs)

routes = []

for i in range(no_legs):
    cityTo = legs[i]["cityTo"]
    cityFrom = legs[i]["cityFrom"]
    cityCodeTo = legs[i]["cityCodeTo"]
    cityCodeFrom = legs[i]["cityCodeFrom"]
    routes.append((cityTo, cityFrom, cityCodeTo, cityCodeFrom))


# print(routes)

# for i in range(3):
#     print(output["data"][i]["route"][0]["flyTo"])
#     print(output["data"][i]["route"][0]["flyFrom"])


def trainRoutes(goingFrom, goingTo):
    response = requests.get('https://api.skypicker.com/flights?fly_from=paris_fr&fly_to=berlin_de&v=3&vehicle_type=train,bus&date_from=29/02/2020&nights_in_dst_from=6&nights_in_dst_to=6&partner=picky')
    # https: // api.skypicker.com / flights?fly_from = paris_fr & fly_to = berlin_de & v = 3 & vehicle_type = train, bus & date_from = 29 / 02 / 2020 & nights_in_dst_from = 6 & nights_in_dst_to = 6 & partner = picky
    output = response.json();

    # routes = [item["route"] for item in output['data']]
    print(output)
    numberOfRoutes = len(output)
    print(numberOfRoutes)
    return (numberOfRoutes >= 1)

def main():
    print(trainRoutes("London", "Berlin"))

if __name__ == "__main__":
    main()
