/**
 * Created by gordonli on 9/16/16.
 */
module.exports = function(app) {
    var path = require('path');

    app.get('/', function (req, res) {
        res.sendFile(path.resolve("views/login.html"));
    });

    app.get('/home', function (req, res) {
        res.sendFile(path.resolve("views/home.html"));
    });
}
