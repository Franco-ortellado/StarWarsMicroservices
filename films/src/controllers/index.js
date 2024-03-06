const {cachedAsync} = require('../utils');

module.exports = {
	getFilms: require('./getFilms'),
	createFilm: cachedAsync(require('./creteFilms')),
};
