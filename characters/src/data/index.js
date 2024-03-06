const axios = require('axios');

module.exports = {
	list: async () => {
		// Hacer una solicitud GET a la URL para obtener la lista de personajes
		const response = await axios.get('http://database:8004/Character');

		// Devolver la lista de personajes desde la respuesta
		return response.data;
	},
	create: async () => {
		throw Error('Error creando personaje');
	},
};
