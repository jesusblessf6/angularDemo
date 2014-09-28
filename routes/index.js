var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/phones', function(req, res){
	res.json([
		'iphone2', 'iphone3', 'iphone3s', 'iphones4', 'iphone4s', 'iphone5', 'iphone5s', 'iphone5c', 'iphone6', 'iphone6+'
	]);
});

module.exports = router;
