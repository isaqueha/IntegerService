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

// TODO Use JSON API

const opts = { host: 'famTree@famtree-y6fg2.mongodb.net' };

let api = new API.httpStrategies.Express(
	new API.controllers.API(registry), 
	new API.controllers.Documentation(registry, {name: 'Example API'})
);

module.exports = api;