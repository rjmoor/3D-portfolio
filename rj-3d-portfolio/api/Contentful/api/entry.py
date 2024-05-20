# This Python code snippet is demonstrating how to fetch a specific entry from a Contentful space
# using the Contentful SDK. Here is a breakdown of what the code is doing:
import contentful
from dotenv import load_dotenv
import os

load_dotenv()

space_id = os.getenv('CONTENTFUL_SPACE_ID')
delivery_api_key = os.getenv('CONTENTFUL_DELIVERY_API_KEY')
entry_id = "1cSGgEq83zI1nS5v6MWX2S"  # Replace with the actual entry ID you want to fetch

client = contentful.Client(
    space_id,
    delivery_api_key, # Replace 'master' if you are using a different environment
)

try:
    entry = client.entry(entry_id).firstName()
    print(entry)
except contentful.errors.NotFoundError as e:
    print(f"Error: {e.message}")
    print(f"Request ID: {e.request_id}")
    print(f"Details: {e.details}")
