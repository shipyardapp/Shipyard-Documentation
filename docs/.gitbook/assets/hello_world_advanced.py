import os
import datetime
import argparse
import random
import requests

### This tutorial script is ordered to demonstrate each function, not necessarily show how scripts should be ordered. ###

# Set up the script to parse arguments
parser = argparse.ArgumentParser()

# Sets an argument to store your name.
parser.add_argument('--name', dest='name')

# Parse the argument so that the value can be referenced.
args = parser.parse_args()

# Pull in the argument set in the tutorial.
print('Hello, ' + args.name + '!\n')

# Prints custom text that was set as an environment variable.
custom_text = os.environ.get('CUSTOM_TEXT','')
print('Below is the text you stored in an environment variable:')
print(custom_text + '\n')

#Connect to a cat facts api and grab a fact.
url = 'https://cat-fact.herokuapp.com/facts'
cat_facts_json = requests.get(url).json()
cat_fact = cat_facts_json[random.randrange(0,4)]['text']
print('You wanted a cat fact? How about this:')
print(cat_fact + '\n')

# Set the runtime of the Log.
run_time = datetime.datetime.now()

# Set Shipyard platform variables as variables.
vessel_id = os.environ.get('SHIPYARD_VESSEL_ID')
vessel_name = os.environ.get('SHIPYARD_VESSEL_NAME')
log_id = os.environ.get('SHIPYARD_LOG_ID')
project_id = os.environ.get('SHIPYARD_PROJECT_ID')
org_name = os.environ.get('SHIPYARD_ORG_NAME')
shipyard_url_structure = 'https://app.shipyardapp.com/{}/projects/{}/vessels/{}/logs/{}'.format(org_name,project_id,vessel_id,log_id)

# Print details about the current Vessel
print('Your Vessel, {}, was run at {}.'.format(vessel_name,run_time))
print('For more details, visit {}\n'.format(shipyard_url_structure))






