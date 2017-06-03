
(function () {
    var approutes = angular.module("myapp").config(function ($routeProvider) {
        $routeProvider
        .when('/', { templateUrl: "ng/views/login.html", controller: "" })
        .when('/login', { templateUrl: "ng/views/login.html", controller: " " })
        .when('/report', { templateUrl: "ng/views/report.html", controller: " " })
        .when('/settings', { templateUrl: "ng/views/settings.html", controller: " " })
        .otherwise({ redirectTo: "/" });
    });
})();
