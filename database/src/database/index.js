const mongoose = require('mongoose');
const {MONGO_URI} = require('../config/envs');

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
	Character: conn.model('character', require('./schemas/characterSchema')),
	Film: conn.model('film', require('./schemas/filmSchema')),
	Planet: conn.model('planet', require('./schemas/PlanetSchema')),
};
// const Character = conn.model('character', require('./schemas/characterSchema'));
// const Film = conn.model('film', require('./schemas/filmSchema'));
// const Planet = conn.model('planet', require('./schemas/PlanetSchema'));

// Character.find()
// 	.populate({
// 		path: 'homeworld',
// 		model: 'planet',
// 		select: '_id name', // Seleccionar solo _id y name del personaje
// 	})

// 	.populate('films', ['_id', 'title'])
// 	.then((res) => console.log(res[0]));

// Film.find()
// 	.populate({
// 		path: 'characters',
// 		model: 'character',
// 		select: '_id name', // Seleccionar solo _id y name del personaje
// 	})
// 	.populate('planets', ['_id', 'name'])
// 	.then((res) => console.log(res[0]));

// Planet.find()
// 	.populate({
// 		path: 'residents',
// 		model: 'character',
// 		select: '_id name', // Seleccionar solo _id y name del personaje
// 	})
// 	.populate('films', ['_id', 'title'])
// 	.then((res) => console.log(res[0]));
