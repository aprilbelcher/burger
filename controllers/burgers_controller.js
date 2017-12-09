var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

router.get('/', function(req,res) {
	res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
	burger.all(function(data){
		var hbsObject = {burgers : data}
		// res.json(hbsObject);
    res.render("index", hbsObject);
	});
});

router.post('/burgers', function(req,res) {
  console.log(req.body)
	burger.create(['burger_name'], [req.body.burger_name], function(data){
		res.redirect('/burgers')
	});
});

router.put('/burgers/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;
