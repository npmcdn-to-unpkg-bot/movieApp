'use strict';
var models = require('./../models');

function getMovies(){
	return models.Movies.findAll();
}

function getMovie(movieid){
	var where = {where:{imdbID:movieid}}
	return models.Movies.find(where);
}

module.exports.getMovies = getMovies;
module.exports.getMovie = getMovie;
