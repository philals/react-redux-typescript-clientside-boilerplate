import * as Hapi from 'hapi';
import * as path from 'path';
const Inert = require('inert');
import { hello } from './util/hello';

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 8000
});

// tslint:disable-next-line:no-empty
server.register([Inert]);

// Add a route to serve static assets (CSS, JS, IMG)
server.route({
	method: 'GET',
	path: '/{param*}',
	handler: {
		directory: {
			path: 'dist/public',
			index: ['index.html']
		}
	}
});

// Add the route
server.route({
	method: 'GET',
	path: '/hello',
	handler: function(request, reply) {
		return reply(hello + ' world');
	}
});

// Start the server
server.start((err) => {

	if (err) {
		throw err;
	}
	// tslint:disable-next-line:no-console
	console.log('Server running at:', server.info.uri);
});
