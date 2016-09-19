/**
 * Created by rileyauten on 9/13/16.
 */

var myApp = angular.module('myApp',[]);
myApp.controller('loginCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.test = "helloasfas";
    $scope.user = {};
    // Register the login() function
    $scope.login = function(){
        $http.post('/login', {
            username: $scope.user.username,
            password: $scope.user.password
        })
            .success(function(user){
                // No error: authentication OK
                $rootScope.message = 'Authentication successful!';
                $location.url('/admin');
            })
            .error(function(){
                // Error: authentication failed
                $rootScope.message = 'Authentication failed.';
                $location.url('/login');
            });
    };

}]);

