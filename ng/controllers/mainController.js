(function () {
    var mainController = angular.module("myapp").controller("mainController", function ($scope, $location) {
        $scope.cancel = function (program) {
            if (program == "report") {
                $location.path("/report");
            }
            else if (program == "settings") {
                $location.path("/settings");
            }
        }


    });
})();
