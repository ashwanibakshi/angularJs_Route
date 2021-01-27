/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\scripts/angular.min.js" />
/// <reference path="controller/demoController.js" />

var appRoute = angular.module('Route', ["ngRoute"]);

appRoute.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    $routeProvider.when("/first", {
        templateUrl: "/app/views/FrontOne.html",
        controller:"myController"
    }).when("/",{
        templateUrl: "/app/views/HomePage.html",
        controller:"myController"
    }).otherwise({
        redirectTo: "/"
    })

}]);