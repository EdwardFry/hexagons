from flask import Flask
from flask import jsonify, request, json
from flask_cors import CORS
import requests

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

if __name__ == "__main__":
    app.run(host='0.0.0.0', threaded=True)
