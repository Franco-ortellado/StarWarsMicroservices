const server = require('./src/server');

const PORT = 8001;

server.listen(PORT, () => {
	console.log('characters service is running on port : ' + PORT);
});

server.on('error', (err) => {
	console.error('Error in server:', err);
});
