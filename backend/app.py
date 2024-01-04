from flask import request, jsonify, Response, Flask
import json

from markupsafe import escape

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World"

# Post request 
@app.route("/ingredients")
def handle_ingredients():
    return jsonify({'ingredients': "apples, oranges"})
