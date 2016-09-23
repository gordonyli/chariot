angular.module('demo')
    .controller('MySidebar', function($scope, $http) {
        $scope.state = false;
        $scope.menuTitle = "menu";
        $scope.settings = {
            close: true,
            closeIcon: "fa fa-times"
        };
        $scope.items = [
            {
                name: "first item",
                link: "//google.com",
                icon: "fa fa-google",
                target: "_blank"
            },
            {
                name: "second item",
                link: "",
                icon: "",
                target: ""
            }
        ];
        $scope.theme = 'white';

        $scope.sub = function() {
            $http.post('/view1',$scope.formData).
            success(function(data) {
                console.log("posted successfully");
            }).error(function(data) {
                console.error("error in posting");
            })
        }
    });


