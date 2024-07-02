import requests
import json

# URL to which the request is to be sent
url = "https://basp-group.github.io/"

# API key
api_key = "https://recaptchaenterprise.googleapis.com/v1/projects/basplib-1719408011143/assessments?key=API_KEY"

# Read the JSON data from a file
with open('request.json', 'r') as file:
    json_data = json.load(file)

# Prepare headers
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

# Send the POST request
response = requests.post(url, headers=headers, json=json_data)

# Check the response
if response.status_code == 200:
    print("Request was successful.")
    print("Response:", response.json())
else:
    print(f"Request failed with status code: {response.status_code}")
    print("Response:", response.text)
