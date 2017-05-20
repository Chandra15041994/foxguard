var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Employee = new Schema({
	Full_Name: String,
	Email: String,
	Password: String,
	Phone: String,
	Gender: String,
	Date_of_Birth: String
}, { versionKey: false});

module.exports = mongoose.model('Employee', Employee);
