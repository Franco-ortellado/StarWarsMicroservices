const server = require('./src/server');

const PORT = 8003;

server.listen(PORT, () => {
	console.log('planet service is running on port ' + PORT);
});
