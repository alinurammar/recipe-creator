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
instr = "You are a personal chef. Provide 3 concise recipes using ingredients and some keywords from the user. The users input will be in the format of " + constants.USER_INPUT_FORMAT +  ". Respond with your analysis in JSON format. The JSON schema should be " + str(constants.JSON_SCHEMA)

def create_assistant(assistant_name,
                 	my_instruction,
                 	model=constants.GPT_MODEL):
    
	my_assistant = client.beta.assistants.create(
        name=assistant_name,
        instructions=my_instruction,
        model=model
    )
    
	return my_assistant


my_assistant = create_assistant(assistant_name="Chef", my_instruction=instr)
my_thread = client.beta.threads.create()


def initiate_interaction(user_message):
	message = client.beta.threads.messages.create(thread_id=my_thread.id,
                                              	role="user",
                                              	content=user_message,
	)
    
	return my_thread

def trigger_assistant(my_thread, my_assistant):
    tries = 0
    run = client.beta.threads.runs.create(
  	    thread_id = my_thread.id,
  	    assistant_id = my_assistant.id,
	)

    run_status = client.beta.threads.runs.retrieve(
        thread_id=my_thread.id,
        run_id=run.id,
    )
    while(run_status.status != 'completed'):
        run_status = client.beta.threads.runs.retrieve(
            thread_id=my_thread.id,
            run_id=run.id,
        )
        tries += 1
    
    return run_status.status + str(tries)
    
    

def print_response(my_thread):
    messages = client.beta.threads.messages.list(
        thread_id = my_thread.id
    )

    #print(messages)
    response = messages.data[0].content[0].text.value
    print(response)
    return response




def generate_recipes(ingredientsList, filtersList):
    ingredients = ingredientsList + constants.pantry_and_spice_ingredients
    user_message = f"Ingredients: {', '.join(ingredients)}. " + " Keywords: " + filtersList
    
    initiate_interaction(user_message=user_message)

    #run thread
    run_status = trigger_assistant(my_thread, my_assistant)

    print(run_status)
    #return new response

    assistant_response = print_response(my_thread)

    return assistant_response