angular.module('demo')
    .controller('MySidebar', function($scope) {
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
    });

