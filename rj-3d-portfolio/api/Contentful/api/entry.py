from contentful import Client

client = Client(
    "<space_id>",
    "<content_delivery_api_key>",
    environment="master",  # Optional - it defaults to 'master'.
)

entry = client.entry("<entry_id>")
