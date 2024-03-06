const {cachedAsync} = require('../utils');

module.exports = {
	getPlanets: cachedAsync(require('./getPlanets')),
	createPlanet: cachedAsync(require('./createPlanet')),
};
