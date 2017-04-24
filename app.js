var express = require('express');
var bodyParser = require('body-parser');
var nocache = require('nocache');

var db = require('./server/employeeModel.js')
var employee = require('./server/employeeActions.js');

var app = express();
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/dist'));

app.use(nocache());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

//RESTFUL APIS
app.get('/api/employees', employee.getEmployees);
app.post('/api/employees', employee.createEmployee);
app.put('/api/employees/:_id', employee.updateEmployee);
app.delete('/api/employees/:_id', employee.deleteEmployee);


var port = process.env.PORT || 8080;
var server = app.listen(port, function(req, res) {
    console.log('Server running @ ' + port);
});