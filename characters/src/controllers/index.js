const {cachedAsync} = require('../utils');

module.exports = {
	getCharacters: cachedAsync(require('./getCharacter')),
	createCharacter: cachedAsync(require('./createCharacter')),
};
