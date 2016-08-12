(function(){
	angular
		.module('coderMdb')
		.controller('MovieDetailsCtrl', MovieDetailsCtrl);

	function MovieDetailsCtrl(movieSrv, $routeParams, movie) {
		/*TODO #4: Load the movie from the movieService using the id form the route params*/
		// Get the imdb ID to match and get movie
		var moviedVm = this;

		// console.log($routeParams.movieId)

		// ************************* //
		// Loads the movie data from the service file
		// ************************* //
		moviedVm.moviesDetails = movie;
		//ßmoviedVm.removeMovie = movieSrv.removeMovie;

		// ************************* //
		// Setup the routeParams service to get the ID of the movie back 
		// Used for getting to the right data when clicking on the movie in list
		// Returns the movie ID to the getMovie function in Service 
		// Resolve the promise to update the view
		// ************************* //
		moviedVm.movieID = $routeParams.movieId; 
		movieSrv.getMovie(moviedVm.movieID).then(function(res,err){
			moviedVm.movie = res;
		});		
	}
})();


