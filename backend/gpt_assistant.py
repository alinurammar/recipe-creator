import json
import openai
import requests
from tenacity import retry, wait_random_exponential, stop_after_attempt
from termcolor import colored
from dotenv import load_dotenv
from openai import OpenAI
import os
import constants


load_dotenv()
client = OpenAI(api_key=os.getenv('OPEN_API_KEY'))

assistant = client.beta.assistants.create(
    name="Chef",
    instructions="You are a personal chef. Provide 3 concise recipes using ingredients and some keywords from the user. The users input will be in the format of " + constants.USER_INPUT_FORMAT +  ". Respond with your analysis in JSON format. The JSON schema should be " + str(constants.JSON_SCHEMA),
    model=constants.GPT_MODEL
)

thread = client.beta.threads.create()

def print_thread():
    messages = client.beta.threads.messages.list(
        thread_id=thread.id
    )

    print(messages)

def generate_recipes(ingredientsList, filtersList):
    ingredients = ingredientsList + constants.pantry_and_spice_ingredients
    #add new message to thread
    client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=f"Ingredients: {', '.join(ingredients)}. " + " Keywords: " + filtersList
    )

    #run thread
    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=assistant.id
    )

    #return new response

    run = client.beta.threads.runs.retrieve(
        thread_id=thread.id,
        run_id=run.id
    )

    messages = client.beta.threads.messages.list(
        thread_id=thread.id
    )

    assistant_response = messages.data[0].content[0].text.value

    print(messages)

    return assistant_response