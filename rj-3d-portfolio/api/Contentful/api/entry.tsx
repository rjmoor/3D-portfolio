const contentful = require('contentful/contentful.node')

const client = contentful.createClient({
	space: "<space_id>",
	environment: "<environment_id>", // defaults to 'master' if not set
	accessToken: "<content_delivery_api_key>",
});

client.getEntry("<entry_id>").then((entry) => console.log(entry)).catch(console.error);
