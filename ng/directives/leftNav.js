(function(){
  var leftNav = angular.module("myapp").directive("leftNav",function(){
    return {
      restrict: "E",
      replace : false,
      scope : false,
      templateUrl: "ng/templates/leftnav.html",
      controller : function ($scope, $location) {
        $scope.changeurl = function (el) {
            if (el == "report") {
                console.log("inside main controller, el is report");
                $location.url("/report");
            }
            else if (el == "settings") {
                console.log("inside main controller, el is settings");
                $location.url("/settings");
            }
            else {
                console.log("inside main controller, el is unrecognized, moving to report");
                $location.url("/report");
            }
        }
        console.log("Inside leftNav directive")
      }
    }
  });
})();
