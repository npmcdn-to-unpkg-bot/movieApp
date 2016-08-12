var express = require('express');
var bodyParser = require('body-parser');
var models = require('./models');

var app = express();
app.use(bodyParser.json({}));
app.use(express.static(__dirname + './../app'));

//DEFINE ROUTES
var movie_routes = require('./routes/movies');
var init_routes = require('./routes/init');

app.use('/api/movies',movie_routes);
app.use('/api/init',init_routes);


models.sequelize.sync().then(function(){
	app.listen(80,function(){
		console.log('Server started at http://localhost:80');
		console.log('To Stop server press Ctrl + C');
	})
});