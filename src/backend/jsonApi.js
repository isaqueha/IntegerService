const API = require('json-api');

let models = {
	"User": require('./models/User'),
	"Integer": require('./models/Integer')
};

let adapter = new API.dbAdapters.Mongoose(models);
let registry = new API.ResourceTypeRegistry({
	"users": {},
	"integers": {}
}, {
	"dbAdapter": adapter,
	"urlTemplates": { 
		"self": "/{type}/{id}"
	}
});

// Tell the lib the host name our API is served from; needed for security.
const opts = { host: 'famTree@famtree-y6fg2.mongodb.net' };

// Set up a front controller, passing it controllers that'll be used
// to handle requests for API resources and for the auto-generated docs.
let api = new API.httpStrategies.Express(
	new API.controllers.API(registry), 
	new API.controllers.Documentation(registry, {name: 'Example API'})
);

// Render the docs at /
// app.get("/:type(users|integers)", api.apiRequest);
// app.get('/docs', api.docsRequest);

module.exports = api;