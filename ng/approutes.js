
(function () {
    var approutes = angular.module("myapp").config(function ($routeProvider) {
        $routeProvider
        .when('/', { templateUrl: "ng/views/login.html", controller: "" })
        .when('/arch', { templateUrl: "ng/views/architecture.html", controller: " " })
        .when('/about', { templateUrl: "ng/views/about.html", controller: " " })
        .when('/login', { templateUrl: "ng/views/login.html", controller: " " })
        .when('/report', { templateUrl: "ng/views/report.html", controller: " " })
        .when('/settings', { templateUrl: "ng/views/settings.html", controller: " " })
        .otherwise({ redirectTo: "/" });
    });
})();
