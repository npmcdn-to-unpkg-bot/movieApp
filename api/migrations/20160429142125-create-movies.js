'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      Year: {
        type: Sequelize.INTEGER
      },
      Rated: {
        type: Sequelize.STRING
      },
      Released: {
        type: Sequelize.STRING
      },
      Runtime: {
        type: Sequelize.STRING
      },
      Genre: {
        type: Sequelize.STRING
      },
      Director: {
        type: Sequelize.STRING
      },
      Writer: {
        type: Sequelize.STRING
      },
      Actors: {
        type: Sequelize.STRING
      },
      Plot: {
        type: Sequelize.STRING
      },
      Language: {
        type: Sequelize.STRING
      },
      Countr: {
        type: Sequelize.STRING
      },
      Awards: {
        type: Sequelize.STRING
      },
      Poster: {
        type: Sequelize.STRING
      },
      Metascore: {
        type: Sequelize.INTEGER
      },
      imdbRating: {
        type: Sequelize.FLOAT
      },
      imdbVotes: {
        type: Sequelize.INTEGER
      },
      imdbID: {
        type: Sequelize.STRING
      },
      Type: {
        type: Sequelize.STRING
      },
      Response: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Movies');
  }
};