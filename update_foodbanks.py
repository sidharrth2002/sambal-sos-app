#!/usr/bin/env python
# Script to open the foodbank sheet, get the geocoding for a particular address, and export the result to a JSON file.
from googlemaps import Client as google_maps
from dotenv import load_dotenv
from pathlib import Path
import os
import json
import sys
import requests

load_dotenv()

if len(sys.argv) < 3:
	print("Usage: update_foodbanks.py <sheet_id> <output_filename>")
	exit(1)

def fill_empty_columns(fb):
    for y in range(0, len(columns)): # Fill in empty fields with an empty string
            if columns[y] not in bank_dict:
                bank_dict[columns[y]] = ""

# Parse arguments
dirname = os.path.abspath(os.path.dirname(__file__))

sheet_id = sys.argv[1]

json_file = sys.argv[2]
json_file_path = os.path.join(dirname, sys.argv[2])

# get existing addresses and store their coordinates in a dict
addresses = dict()
try:
    foodbanks_file = open(json_file_path
, 'r')
    content = foodbanks_file.read()

    data = json.loads(content)

    for x in range(len(data)):
        curr = data[x]
        address_list = curr['address']

        for y in range(len(address_list)):
            current_address = address_list[y]
            full_address = current_address['full_address']
            addresses[full_address] = current_address['coordinates']

except FileNotFoundError:
    print(f"{json_file_path} does not exist in the current directory, skipping existing address check")

request_url = f"https://spreadsheets.google.com/feeds/cells/{sheet_id}/1/public/full?alt=json"

## Get spreadsheet feed object
res = requests.get(request_url)

if res.status_code >= 400:
    raise Exception(f"Request to Google Sheet URL {request_url} returned error code {res.status_code}.")

resObject = res.json()

entries = resObject['feed']['entry']


# parse column headers from first row of google sheets
columns = []

for x in range(len(entries)):
    row_no = int(entries[x]['gs$cell']['row'])

    if row_no > 1:
        break

    columns.append(entries[x]['content']['$t'])

output = []
bank_dict = {}

current_row = 2

num_cols = len(columns)

## Checking for row numbers and column numbers is necessary because the Sheets API does not return empty rows in its results.
## The alternative would be to call the URL for every cell, but that is insane. There would be too many API calls.
for x in range(num_cols, len(entries)):

    row_no = int(entries[x]['gs$cell']['row'])

    if row_no > current_row:
        fill_empty_columns(bank_dict)
        output.append(bank_dict)
        bank_dict = {}
        current_row = row_no

    col_no = int(entries[x]['gs$cell']['col'])

    bank_dict[columns[col_no-1]] = entries[x]['content']['$t']

fill_empty_columns(bank_dict)
output.append(bank_dict) # Append the last dictionary object

geocoding_api_key = os.environ['GMAPS_GEOCODING_API_KEY']
google_maps = google_maps(geocoding_api_key)

## Modify the address object to match the provided format and call geocaching
for x in range(len(output)):
    address = dict()

    full_address = output[x]['address']

    if full_address != '' and full_address not in addresses:
        address['full_address'] = output[x]['address']
        address['coordinates'] = {}
        address['coordinates']['longitude'] = 0.0
        address['coordinates']['latitude'] = 0.0

        try:            
                geocode_result = google_maps.geocode(output[x]['address'])

                if len(geocode_result) > 0:
                    address['coordinates']['longitude'] = geocode_result[0]['geometry']['location'] ['lat']
                    address['coordinates']['latitude'] = geocode_result[0]['geometry']['location']['lng']

        except Exception as e:
            print("Unexpected error occurred.", e)
        
        finally:
            output[x]['address'] = list()
            output[x]['address'].append(address)

## check if path exists
if not os.path.exists(json_file_path):
    dir_name = os.path.dirname(json_file)
    Path(dir_name).mkdir(parents=True, exist_ok=True)

with open(json_file_path, 'a+', encoding='utf-8') as f:
    json.dump(output, f, ensure_ascii=False, indent=4, sort_keys=True)