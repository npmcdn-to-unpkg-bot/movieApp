'use strict';
module.exports = function(sequelize, DataTypes) {
  var MOVIE = sequelize.define('MOVIE', {
    Title: DataTypes.STRING,
    Rated: DataTypes.STRING,
    Released: DataTypes.STRING,
    Runtime: DataTypes.STRING,
    Genre: DataTypes.STRING,
    Director: DataTypes.STRING,
    Write: DataTypes.STRING,
    Actors: DataTypes.STRING,
    Plot: DataTypes.STRING,
    Language: DataTypes.STRING,
    Country: DataTypes.STRING,
    Awards: DataTypes.STRING,
    Poster: DataTypes.STRING,
    Metascore: DataTypes.STRING,
    imdbRating: DataTypes.STRING,
    imdbVotes: DataTypes.STRING,
    imdbID: DataTypes.STRING,
    Type: DataTypes.STRING,
    Response: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MOVIE;
};