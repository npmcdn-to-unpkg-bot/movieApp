(function(){
    
    angular
        .module('coderMdb')
        .service('movieSrv', MovieService);

    function MovieService($http) {
        var self = this;
        //In a real application this would be loaded from a server

        // ************************* //
        // Binds the functions below to the service function to be called in the controller
        // ************************* //        
        self.movies = []
        self.getMovie = getMovie;
        self.getMovies = getMovies;
        self.createMovie = createMovie;
        //self.removeMovie = removeMovie;
        self.tempMovie = {};
        self.tempID = {};

        // First implementation of the getMovie function
        // ************************* //        
        // function getMovie(id){
        //   return self.movies.filter(function(movie) {return movie.imdbID === id})[0];
        // };

        // THIS WORKS
        // Using a post request so that the server can see the data being passed
        // ************************* //        
        // function getMovie(id){
        //   var data = {imdbID: id}
        //   console.log(data)
        //   return $http.post('/api/movieData/getMovie', data).success(function(data,status){
        //     console.log("DATA HAS BEEN POSTED")
        //     console.log("DATA",data)
        //     self.tempID = data;
        //   })
        //     .then(function(res){
        //       console.log(res.data)
        //       return res.data
        //     }, function(err){
        //       console.log(err);
        //     })
        // };

        // Third implementation of the getMovie function - this time using an http get request as opposed to post
        // Passing a param this time and getting the id from the specified id
        // ************************* //        
        function getMovie(id){
          // console.log("PARAMS",params)
          return $http.get('/api/movieData/'+id).success(function(data,status){
            console.log("DATA HAS BEEN POSTED")
            console.log("DATA",data)
          })
            .then(function(res){
              console.log(res.data)
              return res.data
            }, function(err){
              console.log(err);
            })
        };

        // getMovies function retrieves the data from the server at that particular end point
        // Returns self.movie so that it can be resolved in the app.js file
        // ************************* //        
        function getMovies() {
          console.log("Function getmovies called")
          return $http.get('/api/movieData')
            .then(function(res){
              self.movies = res.data;
              return self.movies;
          }, function (err){
            console.log(err);
            return;
          })
        }

        // CreateMovie function is called when the user wants to add a new movie to his/her database collection
        // Passes the input from the ng-model and using a post request, passes the data to the server
        // ************************* //        
        function createMovie(title) {
          console.log("create movie title arg:", title);
          var data = {title: title}
          return $http.post('/api/movieData', data).success(function(data, status){
            self.tempMovie = data;
            // console.log('Data has been posted')
            // console.log("SErvice Data:", data)
            // console.log("temp movie:",self.tempMovie)
          })
            .then(function(res){
              console.log('CREATE MOVIE',res);
              return getMovies();
            }, function(err){
                console.log(err)
                return;
            })
        }

        // Doesnt work yet
        // function removeMovie(id) {
        //     return $http.delete('/api/movieData/'+id).success(function(data,status){
        //     console.log("DATA HAS BEEN REMOVED")
        //   })
        //     .then(function(res){
        //       console.log(res.data)
        //       return res.data
        //     }, function(err){
        //       console.log(err);
        //     })
        // }
    }
})();
