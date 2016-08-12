(function(){
	angular
		.module('coderMdb')
		.controller('MovieListCtrl', MovieListCtrl);

	function MovieListCtrl(movieSrv, $location, movie) {
		var movielVm = this;
	  /*TODO #3: Load all of the movies from the movieService*/

	  	// ************************* //
		// Binds the functions below to the controller function to be called in the HTML
		// ************************* //
	  	movielVm.go = go;
	  	movielVm.nav = nav;
	  	movielVm.page = page;
	  	movielVm.pageReturn = pageReturn;
	  	movielVm.createMovieBtn = createMovieBtn;
	  	movielVm.newMovie = movieSrv.newMovie;
	  	movielVm.tempMovie = movieSrv.tempMovie;
	  	console.log("controller temp movie ID:", movielVm.tempMovie.imdbID)
	  	
	  	// ************************* //
		// Loads the movie data from the service file
		// ************************* //
	  	movielVm.moviesList = movie;
	  	console.log("Movie Data:",movie)

	  	// ************************* //
	  	// Path function that is invoked when clicking on a movie
	  	// Goes to the movie details page
	  	// ************************* //
	  	function go(path, movieId) {
  			$location.path(path + movieId);
		};	

		function createMovieBtn() {
			console.log("Button pressed");
			if(movielVm.newMovie == undefined){
				alert("Please indicate movie to be added")
				//toastr.error('Please indicate movie to be added')
			} else {
				var title = movielVm.newMovie.toLowerCase();
				movieSrv.createMovie(title)
					.then(function(res,err){
						movielVm.tempMovie = movieSrv.tempMovie;
						go('/movieDetails/', movielVm.tempMovie.imdbID);
					})	
			}
		}
	  
	  	movielVm.sortOptions = [
		    {label: 'Title', sortField: 'Title', reverse: false},
		    {label: 'Rating', sortField: "imdbRating", reverse: true}
		]
	  
	  	movielVm.curPage = 0;
	  	movielVm.moviesPerPage = 4;

	  	// ************************* //
	  	// Checks which index to start depending on the current page
	  	// page 1, index 0-3
	  	// page 2, index 4-7
	  	// page 3, index 8- onwards
	  	// ************************* //
	  	movielVm.startIndex = movielVm.curPage * movielVm.moviesPerPage;
	  	
	  	// ************************* //
	  	// Get an integer value for total pages regardless the length of array length
	  	// Math.ceil used as opposed to Math.round because we don't want page 0.4 -> page 0
	  	// ************************* //
	  	movielVm.totalPages = (movielVm.moviesList.length) / movielVm.moviesPerPage;
	  	movielVm.pageRound = Math.ceil(movielVm.totalPages);

	  	// console.log(movielVm.totalPages);
	  	// console.log(movielVm.moviesList.length);

	  	// ************************* //
	  	// Nav function executed when "next" and "previous" button clicked
	  	// Allows to go through the pages and updates the values of current page and start index
	  	// Keep track for pagination filter and incremets start index within the function here
	  	// ************************* //
	  	function nav(arg) {
	  		movielVm.curPage = ((movielVm.curPage + movielVm.pageRound + arg) % movielVm.pageRound);
	  		movielVm.startIndex = (movielVm.curPage * movielVm.moviesPerPage);
	  		console.log("startindex: " + movielVm.startIndex)
	  	}	

	  	// ************************* //
	  	// The function below ensures that when you do you search filter
	  	// the page number is correct even. i.e search matrix, it will show page 1 of 1
	  	// Using the ctrl.filteredMovies variable that we declared in the HTML and called it using movielVm.filteredMovies
	  	// Monitoring the length of that array and changing the page number accordingly
	  	// ************************* //
	  	function page() {
	  		return Math.ceil(movielVm.filteredMovies.length / movielVm.moviesPerPage)
	  	}

	  	// ************************* //
	  	// The function below ensures that when you go to the 3rd page or any page, when you do search, you go back to page 1 of 1
	  	// Also ensures that the movie youre looking for is there
		// ************************* //
	  	function pageReturn() {
	  		movielVm.curPage = 0;
	  		movielVm.startIndex = (movielVm.curPage * movielVm.moviesPerPage);
	  	}
	}
})();
