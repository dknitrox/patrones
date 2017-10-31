var nodemon = require('nodemon');


nodemon({
	script: 'prueba2.ts',
	ext: 'ts json'
});

nodemon.on('start', function () {
	console.log('Starting server..');
}).on('quit', function () {
	console.log('Server has quit');
}).on('restart', function (files) {
	console.log('Server restarted due to: ', files);
});