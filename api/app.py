from flask import Flask
from flask import jsonify, request, json
from flask_cors import CORS
import requests
from carbon import carbonFootprint
from maps import getDistance
from Kiwi import getFlightRoutes

app = Flask(__name__)
CORS(app)

# GET http://pavoldrotar.com:5000/api
@app.route('/api')
def api():
    return jsonify("To bee or not to bee.")

# GET http://pavoldrotar.com:5000/kiwi
@app.route('/kiwi')
def kiwi():
    kiwi_get_url = 'https://api.skypicker.com/flights'

    response = requests.get("https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2020&dateTo=12/12/2020&partner=picky&v=3")

    print(response.status_code)

    output = response.json()

    return jsonify([output["data"][0]["route"][0]["flyTo"], output["data"][0]["route"][0]["flyFrom"]])

# GET http://pavoldrotar.com:5000/cars
@app.route('/cars')
def cars():
    fromPlace = request.args.get('from')
    toPlace = request.args.get('to')

    distance = getDistance(fromPlace, toPlace)
    return carbonFootprint('anyCar', distance, 'def')

@app.route('/carbon')
def carbon():
    try:
        fromPlace = request.args.get('from')
        toPlace = request.args.get('to')
        distance = None
        if 'distance' in request.args:
            distance = request.args.get('distance')
        mode = request.args.get('mode')

        if distance != None:
            distance  = int(distance)
            return carbonFootprint(mode, distance, 'def')
        else:
            distance = getDistance(fromPlace, toPlace)
            return carbonFootprint(mode, distance, 'def')

        return jsonify([fromPlace, toPlace, distance, mode]), 200
        
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route('/distance')
def distance():
    try:
        fromPlace = request.args.get('from')
        toPlace = request.args.get('to')

        return jsonify(getDistance(fromPlace, toPlace)), 200
        
    except Exception as e:
        return f"An Error Occured: {e}"

def getRouteFootprint(route, mode):
    legs = list(map(lambda x: getDistance(x["cityFrom"], x["cityTo"]), route))
    carbon = sum(list(map(lambda distance: float(carbonFootprint(mode, distance, 'def')), legs)))
    return carbon

@app.route('/flight')
def flight():
    try:
        fromPlace = request.args.get('from')
        toPlace = request.args.get('to')
        date = request.args.get('date')
        mode = "anyFlight"

        routes = getFlightRoutes(fromPlace, toPlace, date)
        routes = list(map(lambda route: [route, getRouteFootprint(route["route"], mode)], routes))


        return jsonify(routes), 200

    except Exception as e:
        return f"An Error Occurred: {e}"

@app.route('/ground')
def ground():
    try:
        fromPlace = request.args.get('from')
        toPlace = request.args.get('to')
        date = request.args.get('date')
        vehicleType = "train,bus"

        routes = getFlightRoutes(fromPlace, toPlace, date)
        routes = list(map(lambda route: [route, getRouteFootprint(route["route"], vehicleType)], routes))

        return jsonify(routes), 200

    except Exception as e:
        return f"An Error Occurred: {e}"


if __name__ == "__main__":
    app.run(host='0.0.0.0', threaded=True)