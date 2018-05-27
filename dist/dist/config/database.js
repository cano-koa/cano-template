'use strict';

module.exports = {
	stores: {
		mongo: {
			connection: { uri: 'mongodb://localhost/test' }
		}
	},
	storeDefault: 'mongo'
};