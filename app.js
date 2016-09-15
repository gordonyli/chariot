/**
 * Created by gordonli on 9/13/16.
 */
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var mysql = require('mysql');

app.listen(3000, function() {
    console.log('Node server running @ http://localhost:3000');
});

app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/css',  express.static(__dirname + '/css'));
app.use('/lib',  express.static(__dirname + '/lib'));
app.use('/js',  express.static(__dirname + '/js'));
app.use('/views',  express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.sendFile('login.html',{'root': __dirname + '/views'});
})

app.get('/home',function(req,res){
    res.sendFile('home.html',{'root': __dirname + '/views'});
})

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
    console.log(req.body.desc);
    console.log(req.body.title);
    var post  = {username: req.body.desc, password: req.body.title};
    connection.query('insert into users values (?,?)', [req.body.desc, req.body.title], function(err, rows) {
        if (!err)
            console.log('inserted into users');
        else
            console.log('Error while performing Query.');
    });
    res.end();
});

// connection.end();

