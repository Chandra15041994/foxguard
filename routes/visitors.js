var express = require('express');
var router = express.Router();
var Visitor = require('../models/visitor');

//get all
router.get('/', function(req,res) {
	Visitor.find(function(err, visitors) {
		if(err) throw(err);
		res.json(visitors);
	});
});

//get one 
router.get('/:id', function(req, res) {
	Visitor.findOne({_id: req.params.id}, function(err, visitor) {
		if(err) throw(err);
		res.json(visitor);
	});
});

//create one 
router.post('/', function(req, res) {

	var vist = new Visitor();
	vist.Full_Name = req.body.full_name;
	vist.Email =  req.body.email;
	vist.AadharId = req.body.aadhar;
	vist.Phone = req.body.phone;
	vist.Gender = req.body.gender;
	vist.Date_of_Birth = req.body.dob;
	vist.VisitDay = req.body.vday;
	vist.VisitTime = req.body.vtime;

	vist.save(function(err) {
		if(err) throw(err);
		res.json({message: 'Visitor created!'});
	});
});

module.exports = router;