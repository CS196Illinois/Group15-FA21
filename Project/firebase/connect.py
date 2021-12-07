import pyrebase
import csv
# import json
import config

firebase = pyrebase.initialize_app(config)

db = firebase.database()

import json


# add data to the database from a json
def auto_data(jsondata):
  database = firebase.database()
  with open(jsondata) as file:
    file_contents = json.load(file)
  emissions_ref = database.child('ghg_emissions_usa')
  emissions_ref.set(file_contents)

# add data to the database from a csv
def auto_data_csv(csvdata):
  database = firebase.database()
  emissions_ref = database.child('ghg_emissions_usa')
  with open(csvdata, newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=' ', quotechar='|')
  for row in reader:
    emissions_ref.child()

# get data from the database
def get_data():
  db = firebase.database()
  ghg_emissions_usa = db.child('ghg_emissions_usa').get()
  for datapoint in ghg_emissions_usa.each():
      print(datapoint.key(), datapoint.val())

# move data in the database
def move_data():
  db = firebase.database()
  # iterate through database root
  for datapoint in db.get().each():
    if datapoint.key() == "ghg_emissions_usa": # skip; don't add element to itself 
      continue
    # add new key value pair
    db.child('ghg_emissions_usa').child(datapoint.key()).set(datapoint.val())