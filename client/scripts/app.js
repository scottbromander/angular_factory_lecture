var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: "/assets/views/routes/home.html",
            controller: "BaseController"
        })
        .when('/another', {
            templateUrl: "/assets/views/routes/another.html",
            controller: "AnotherController"
        })
        .otherwise('/home');
}]);