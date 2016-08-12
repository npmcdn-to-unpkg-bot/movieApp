(function(){
	angular
		.module('coderMdb')
		.controller('HomeCtrl', HomeCtrl);

	function HomeCtrl() {
		var homeVm = this;

		// ************************* //
		// Some little extra styling :p
		// ************************* //
		homeVm.title = "Welcome to your Movie Listing";
	  	
	}
})();


