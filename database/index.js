const server = require('./src/server');

const {Character, Film, Planet} = require('./src/database');

// Character.list().then((res) => console.log(res));

// Character.get(1).then((res) => console.log(res));

// Character.insert({
// 	_id: '200',
// 	name: 'John Doe',
// 	birth_year: '191',
// }).then((res) => console.log(res));

// Planet.list().then((res) => console.log(res));

const PORT = 8004;

server.listen(PORT, () => {
	console.log('database service is running on port ' + PORT);
});
