/**
 * Created by rileyauten on 9/13/16.
 */

var myApp = angular.module('myApp',[]);
myApp.controller('loginCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.test = "helloasfas";
    $scope.user = {};
    // Register the login() function
    $scope.subLogin = function() {
        $http.post('/signin',$scope.formData).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        })
    };

    $scope.subSignup = function() {
        $http.post('/signup',$scope.formData).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        })
    };

}]);

