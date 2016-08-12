var express  = require('express'),
  request    = require('request'),
  bodyParser = require('body-parser'),
  models     = require('./models'),
	fs		= require('fs'),
	app 	= express();

// Load the movie challenge on the server
app.use(express.static(__dirname + './../app/'));
app.use(bodyParser.json());

// Set routes
app.post('/api/movieData', function(req, res){
  //console.log("request body:",req.body.title)
  // movieName refers to the ng-model data passed by the user from the angular environment
  var movieName = req.body.title;
  var url = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json';
  request(url, function(err, response, body){
    if (!err){
      // console.log("REQUEST RESPONSE BODY:", JSON.parse(body))
      // console.log("JSON PARSE:", JSON.parse(body).Title)

      var movieAdd = {
        Title: JSON.parse(body).Title,
        Year: JSON.parse(body).Year,
        Rated: JSON.parse(body).Rated,
        Released: JSON.parse(body).Released,
        Runtime: JSON.parse(body).Runtime,
        Genre: JSON.parse(body).Genre,
        Director: JSON.parse(body).Director,
        Writer: JSON.parse(body).Writer,
        Actors: JSON.parse(body).Actors,
        Plot: JSON.parse(body).Plot,
        Language: JSON.parse(body).Language,
        Country: JSON.parse(body).Country,
        Awards: JSON.parse(body).Awards,
        Poster: JSON.parse(body).Poster,
        Metascore: JSON.parse(body).Metascore,
        imdbRating: JSON.parse(body).imdbRating,
        imdbVotes: JSON.parse(body).imdbVotes,
        imdbID: JSON.parse(body).imdbID,
        Type: JSON.parse(body).Type,
        Response: JSON.parse(body).Response
      }

      // Adding each movie's data inside the database
      // ************************* //
      models.MOVIE.create(movieAdd).then(function(movies){
        res.send(movies)        
      })
    } else {
      console.log('There is an error: ' + err)
    }
  }) 
})

// Store all movie data from the database onto the end point
app.get('/api/movieData', function(req, res){
  models.MOVIE.findAll().then(function(movies){
    res.send(movies);  
  })
})

// THIS WORKS
// Using post request to get the data from the service file v.01
// ************************* //
// app.post('/api/movieData/getMovie', function(req, res){
//   console.log('REQ BODY GETMOVIE ENDPOINT', req.body)
//   var where = {where:{imdbID:req.body.imdbID}}
//   models.MOVIE.find(where).then(function(movie){
//     //console.log(movie)
//     res.send(movie)
//   })
// })

// GET request that is passed a parameter as opposed to a post v.02
// ************************* //
app.get('/api/movieData/:movieId', function(req, res){
  console.log('REQ BODY GETMOVIE ENDPOINT', req.params.movieId)
  var where = {where:{imdbID:req.params.movieId}}
  models.MOVIE.find(where).then(function(movie){
    res.send(movie)
  })
})

// Doest work yet
// app.delete('/api/movieData/:movieId', function(req, res){
//   var where = {where:{imdbID:req.params.movieId}};
//   models.MOVIE.find(where).then(function(movies){
//     movies.destroy();
//     res.json({
//       deleted:true
//     })
//   })
// })
// Start the server
models.sequelize.sync().then(function(){
  app.listen(8090, function(){
    
    // models.MOVIE.findAll().then(function(movies){
    //   console.log(movies)
    // })
    console.log('Server started on http://localhost:8090');
    console.log('Press CTRL + C to stop server');
  })
})

