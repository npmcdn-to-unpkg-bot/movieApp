(function(){
    
    angular
        .module('coderMdb')
        .service('movieSrv', MovieService);

    function MovieService($http) {
        var self = this;
        //In a real application this would be loaded from a server
        self.movies;

        //bind the functions to Service
        self.getMovies = getMovies;
        self.getMovie = getMovie;

        function getMovies(){
          if(!self.movies){
            //if we don't have any movies
            return $http.get('/api/movies')
                    .then(function(res){
                        console.log(res);
                        self.movies = res.data;
                        return res.data;
                    });
          }
          return self.movies;
        };

        function getMovie(id){
          return self.movies.filter(function(movie) {return movie.imdbID === id})[0];
        };

        function addMovie(movie){
            $http.post('/api/movies',movie)
            .then(function(res){
                self.movies.push(res.data);
            })
        }
    }
})();
