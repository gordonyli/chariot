/**
 * Created by gordonli on 9/13/16.
 */
var express = require("express");
var app = express()

app.listen(3000, function() {
    console.log('Node server running @ http://localhost:3000');
})

app.use('/node_modules',  express.static(__dirname + '/node_modules'));

app.use('/style',  express.static(__dirname + '/style'));

app.get('/',function(req,res){
    res.sendFile('home.html',{'root': __dirname});
})