//define our movie routes
var router = require('express').Router();
var movieCtrl = require('./../controller/movies');

//  /api/movies/
router.get('/:movieid',function(req,res){
	movieCtrl.getMovie(req.params.movieid)
	.then(function(movie){
		res.json(movie);
	})
});

router.get('/',function(req,res){
	movieCtrl.getMovies()
	.then(function(movies){
		res.json(movies);
	})
	
});

router.post('/',function(req,res){
	res.json({msg:'POST endpoint hit'});
});

router.put('/:movieid',function(req,res){
	res.send('PUT endpoint hit');
});

router.delete('/:movied',function(req,res){
	res.send('DELETE endpoint hit');
});

module.exports = router;