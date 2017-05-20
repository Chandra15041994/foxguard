var express = require('express');
var router = express.Router();
var Employee = require('../models/employee');

//get all
router.get('/', function(req,res) {
	Employee.find(function(err, employees) {
		if(err) throw(err);
		res.json(employees);
	});
});

//get one 
router.get('/:id', function(req, res) {
	Employee.findOne({_id: req.params.id}, function(err, employee) {
		if(err) throw(err);
		res.json(employee);
	});
});

//create one 
router.post('/', function(req, res) {

	var emp = new Employee();
	emp.Full_Name = req.body.full_name;
	emp.Email =  req.body.email;
	emp.Password = req.body.password;
	emp.Phone = req.body.phone;
	emp.Gender = req.body.gender;
	emp.Date_of_Birth = req.body.dob;

	emp.save(function(err) {
		if(err) throw(err);
		res.json({message: 'Employee created!'});
	});
});

module.exports = router;