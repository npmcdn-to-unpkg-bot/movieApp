(function(){
	/*TODO #1: Add a dependency on the router module*/
	angular
		.module('coderMdb', ['ngRoute']);

	angular
		.module('coderMdb')
		.config(function($routeProvider) {

			$routeProvider
				.when('/home', {
					templateUrl: 'partials/home.html',
					controller: 'HomeCtrl as ctrl'
				})
				.when('/movieList', {
					templateUrl: 'partials/movieList.html',
					controller: 'MovieListCtrl as ctrl',
					resolve:{
					movie: function(movieSrv){
						console.log('resolving main')
						return movieSrv.getMovies();
					}
				}
				})
				.when('/movieDetails/:movieId', {
					templateUrl: 'partials/movieDetails.html',
					controller: 'MovieDetailsCtrl as ctrl',
					resolve:{
					movie: function(movieSrv){
						console.log('resolving main')
						return movieSrv.getMovies();
					}
				}
				})
				.otherwise({
					redirectTo: '/home',
				})
	  /*
	  TODO #2:
	  Configure the router to:
	    -load movieList.html and use the MovieListCtrl when the url is '/home'
	    -load movieDetails.html and use the MovieDetailsCtrl when the url is '/movie/:movieId'
	  For any other url redirect the user to the home page.
	  */
	});
})();
