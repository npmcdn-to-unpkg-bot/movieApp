'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('MOVIEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
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
      Write: {
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
      Country: {
        type: Sequelize.STRING
      },
      Awards: {
        type: Sequelize.STRING
      },
      Poster: {
        type: Sequelize.STRING
      },
      Metascore: {
        type: Sequelize.STRING
      },
      imdbRating: {
        type: Sequelize.STRING
      },
      imdbVotes: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('MOVIEs');
  }
};