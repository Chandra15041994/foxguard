var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Visitor = new Schema({
	Full_Name: String,
	Email: String,
	AadharId: String,
	Phone: String,
	Gender: String,
	Date_of_Birth: String
}, { versionKey: false});

module.exports = mongoose.model('Visitor', Visitor);
