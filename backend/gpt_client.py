# import the OpenAI Python library for calling the OpenAI API
import json
import openai
import requests
from tenacity import retry, wait_random_exponential, stop_after_attempt
from termcolor import colored
from dotenv import load_dotenv
import os
import constants

load_dotenv()

secret_key = os.getenv('OPEN_API_KEY')

@retry(wait=wait_random_exponential(multiplier=1, max=40), stop=stop_after_attempt(3))
def get_gpt_response(messages, model=constants.GPT_MODEL, max_tokens=constants.MAX_TOKENS, temperature=constants.TEMPERATURE):
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + secret_key,
    }
    json_data = {"model": model, "messages": messages, "max_tokens": max_tokens, "temperature": temperature}

    try:
        response = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers=headers,
            json=json_data,
        )
        return response
    except Exception as e:
        print("Unable to generate ChatCompletion response")
        print(f"Exception: {e}")
        return e

def generate_recipes(ingredientsList):
    try:
        chat_response = get_gpt_response(build_prompt(ingredientsList))
        recipes = extract_recipes(chat_response)
        return recipes

    except Exception as e:
        print(f"Error generating recipes: {e}")
        return None

# def build_prompt(ingredientsList):
#     ingredients = ingredientsList + constants.pantry_and_spice_ingredients
#     return_format = "Return each recipe in JSON format of an array of recipe objects: [{ title: string, body: string }, { title: string, body: string }]."
#     prompt = f"Generate 3 recipes using the following ingredients: {', '.join(ingredients)}. " + return_format
#     messages = [{"role": "system", "content": "You are a helpful assistant that provides recipes."}]
#     messages.append({"role": "user", "content": prompt})

#     return messages
def build_prompt(ingredientsList):
    ingredients = ingredientsList + constants.pantry_and_spice_ingredients
    return_format = "Return each recipe in JSON format of an array of recipe objects: [{ title: string, body: string }, { title: string, body: string }]."
    prompt = f"Generate 3 concise recipes using the following ingredients: {', '.join(ingredients)}. " + return_format
    messages = [{"role": "system", "content": "You are a helpful assistant that provides concise recipes."}]
    messages.append({"role": "user", "content": prompt})

    return messages


def extract_recipes(chat_response):    
    #print(chat_response.json())
    response = chat_response.json()["choices"][0]["message"]["content"]
    print(response)
    return response

generate_recipes(ingredientsList=constants.fridge_ingredients)