const axios = require('axios');

module.exports = {
	list: async () => {
		// Hacer una solicitud GET a la nueva URL para obtener la lista de películas
		const response = await axios.get('http://database:8004/Film');

		// Devolver la lista de películas desde la respuesta
		return response.data;
	},
	create: async () => {
		throw Error('Error creando Film');
	},
};
