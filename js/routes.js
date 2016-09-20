/**
 * Created by gordonli on 9/16/16.
 */
module.exports = function(app, passport) {
    var path = require('path');
    var passport = require('passport');
    var bcrypt = require('bcrypt-nodejs');

    // index
    var index = function(req, res, next) {
        if(!req.isAuthenticated()) {
            res.redirect('/login');
        } else {

            var user = req.user;

            if(user !== undefined) {
                user = user.toJSON();
            }
            res.render('login', {title: 'Home', user: user});
        }
    };

    var signIn = function(req, res, next) {
        if(req.isAuthenticated()) res.redirect('/home');
        res.render('login', {title: 'Sign In'});
    };

    var signInPost = function(req, res, next) {
        passport.authenticate('local', { successRedirect: '/',
            failureRedirect: '/login'}, function(err, user, info) {
            if(err) {
                return res.render('login', {title: 'Sign In', errorMessage: err.message});
            }

            if(!user) {
                return res.render('login', {title: 'Sign In', errorMessage: info.message});
            }
            return req.logIn(user, function(err) {
                if(err) {
                    return res.render('login', {title: 'Sign In', errorMessage: err.message});
                } else {
                    return res.redirect('/');
                }
            });
        })(req, res, next);
    };

    module.exports.index = index;
    module.exports.signIn = signIn;
    module.exports.signInPost = signInPost;


    app.get('/login', function (req, res) {
        res.sendFile(path.resolve("views/login.html"));
    });

    app.get('/home', function (req, res) {
        res.sendFile(path.resolve("views/home.html"));
    });
}
