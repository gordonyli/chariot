/**
 * Created by gordonli on 9/21/16.
 */
// script.js

    // create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/login', {
            templateUrl : 'views/login.html',
            controller  : 'aboutController'
        })

});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

});