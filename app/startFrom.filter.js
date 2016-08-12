(function(){
	angular
		.module('coderMdb')
		.filter('startFromFilter', startFromFilter)

	// ************************* //
	// Custom filter below takes in as an argument the input and a start arg
	// Start argument refers to the index at which we should start from depending on the current page
	// Function returns the input depending on the index at which it starts
	// ************************* //
	function startFromFilter() {
		return function(input, start) {	
			//console.log(start)
			return input.slice(start);
		}
	}
})();