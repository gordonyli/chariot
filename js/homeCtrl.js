/**
 * Created by rileyauten on 9/13/16.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('homeCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.test = "helloasfas";
    $scope.sub = function() {
        console.log("in sub");
        $http.post('/view1',$scope.formData).
        success(function(data) {
            console.log(data);
        }).error(function(data) {
            console.error("error in posting");
        })
    }

}]);

