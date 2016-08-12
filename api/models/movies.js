'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movies = sequelize.define('Movies', {
    Title: DataTypes.STRING,
    Year: DataTypes.INTEGER,
    Rated: DataTypes.STRING,
    Released: DataTypes.STRING,
    Runtime: DataTypes.STRING,
    Genre: DataTypes.STRING,
    Director: DataTypes.STRING,
    Writer: DataTypes.STRING,
    Actors: DataTypes.STRING,
    Plot: DataTypes.STRING,
    Language: DataTypes.STRING,
    Countr: DataTypes.STRING,
    Awards: DataTypes.STRING,
    Poster: DataTypes.STRING,
    Metascore: DataTypes.INTEGER,
    imdbRating: DataTypes.FLOAT,
    imdbVotes: DataTypes.INTEGER,
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
  return Movies;
};