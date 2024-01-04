from flask import request, jsonify, Response, Flask
from flask_cors import CORS, cross_origin
import json

from markupsafe import escape

app = Flask(__name__)

# Post request 
@app.route("/ingredients")
@cross_origin(origin='*')
def handle_ingredients():
    return jsonify({'ingredients': "apples, oranges"})
