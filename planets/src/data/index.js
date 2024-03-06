const axios = require('axios');
module.exports = {
	list: async () => {
		// Hacer una solicitud GET a la nueva URL para obtener la lista de planetas
		const response = await axios.get('http://database:8004/Planet');

		// Devolver la lista de planetas desde la respuesta
		return response.data;
	},
	create: async () => {
		throw Error('Error creando Planeta');
	},
};
