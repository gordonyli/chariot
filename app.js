/**
 * Created by gordonli on 9/13/16.
 */
var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var mysql = require('mysql');
var path = require('path');



app.listen(3000, function() {
    console.log('Node server running @ http://localhost:3000');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/login.html'));
});

//environments
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/css',  express.static(__dirname + '/css'));
app.use('/lib',  express.static(__dirname + '/lib'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);


// database stuff

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysqlpass',
    database : 'Chariot'
});


connection.connect();

// connection.query('select * from users', function(err, rows) {
//     if (!err)
//         console.log('The solution is: ', rows);
//     else
//         console.log('Error while performing Query.');
// });

app.post('/view1', function(req, res) {
    console.log(req.body);
    res.end();
});












