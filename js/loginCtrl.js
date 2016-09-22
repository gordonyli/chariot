/**
 * Created by rileyauten on 9/13/16.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('loginCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.test = "helloasfas";
    $scope.go = function ( path ) {
        $window.location.href = path;
    };
}]);

