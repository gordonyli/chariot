/**
 * Created by gordonli on 9/13/16.
 */
var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app      = express();
var port     = process.env.PORT || 3000;
var mysql = require('mysql');
var path = require('path');

require('./js/routes')(app);


app.listen(3000, function() {
    console.log('Node server running @ http://localhost:3000');
});

//environments
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/css',  express.static(__dirname + '/css'));
app.use('/lib',  express.static(__dirname + '/lib'));
app.use('/js',  express.static(__dirname + '/js'));
app.use('/views',  express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/signup', function(req, res) {
    // console.log(req.body);
    connection.query("insert into users (username,password) values('" + req.body.username + "', '" + req.body.password + "')");
    res.end();
});

app.post('/signin', function(req, res) {
    connection.query("select * from users where username = '" + req.body.logInusername + "'", function(err, rows) {
        if(!err) {
            connection.query("select password from users where username = '" + req.body.logInusername + "'", function(err, rows) {
                var qPass = rows[0].password;
                if(qPass == req.body.logInpassword) {
                    console.log('you can login');
                    res.redirect("views/home.html");
                } else {
                    console.log('wrong password');
                }
            });
        } else {
            console.log(err);
        }
    });
    res.end();
});











