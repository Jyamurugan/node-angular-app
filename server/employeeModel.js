var mongoose = require('mongoose');
var dbURI = 'mongodb://meerushriyan:meerushriyan@ds117251.mlab.com:17251/meerushriyan';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Database connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Database connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Database disconnected');
});

var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: String,
    department: String,
    gender: String,
    age: Number
});

mongoose.model('Employee', employeeSchema);