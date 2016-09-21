/**
 * Created by rileyauten on 9/13/16.
 */

var myApp = angular.module('myApp',[]);
myApp.controller('loginCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.test = "helloasfas";
    $scope.sub = function() {
        $http.post('/view1',$scope.formData).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        })
    }
}]);

