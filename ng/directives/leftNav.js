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
            else if (el == "about") {
                console.log("inside main controller, el is about");
                $location.url("/about");
            }
            else if (el == "architecture") {
                console.log("inside main controller, el is architecture");
                $location.url("/arch");
            }
            else {
                console.log("inside main controller, el is unrecognized, moving to about");
                $location.url("/about");
            }
        }
        console.log("Inside leftNav directive")
      }
    }
  });
})();
