from flask import request, jsonify, Response, Flask
from flask_cors import CORS, cross_origin
import json

from markupsafe import escape

app = Flask(__name__)

# Post request 
@app.route("/ingredients", methods=['POST'])
@cross_origin(origin='*')
def handle_ingredients():
    data = request.json
    ingredients_list_string = data.get('ingredients', '')
    ingredients_list = [ingredient.strip() for ingredient in ingredients_list_string.split(',')]

    return jsonify({'message': 'Ingredients received successfully'})
