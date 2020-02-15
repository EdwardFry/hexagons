from flask import Flask
from flask import jsonify, request, json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api')
def api():
    return jsonify("To bee or not to bee.")

if __name__ == "__main__":
    app.run(host='0.0.0.0', threaded=True)
