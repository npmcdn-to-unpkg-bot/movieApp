(function(){
	angular
		.module('coderMdb')
		.controller('MovieDetailsCtrl', MovieDetailsCtrl);

	MovieDetailsCtrl.$inject = ['$routeParams','$location','movieSrv'];
	
	function MovieDetailsCtrl($routeParams,$location,movieSrv) {
		var moviedVm = this;
	  	/*TODO #4: Load the movie from the movieService using the id form the route params*/
		moviedVm.movie = movieSrv.getMovie($routeParams.movieid);

		moviedVm.goHome = goHome;

		function goHome(){
			$location.path('/home');
		}
	}
})();


