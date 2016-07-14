var express = require('express');

// Create our app
var app = express();

// Tells express which folder we want to serve.
// App.use lets you add functionality to your application.
app.use(express.static('public'));

// Takes 2 arguments, the port and a function that is called when the server is up.
app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});
