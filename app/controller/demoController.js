/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\scripts/angular.min.js" />
/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\app/appRoute.js" />

var myapp = angular.module('myapp', []);

appRoute.controller('myController', function ($scope,$location) {
    $scope.message = "This is page one"
    $scope.home ="we are on home page"

    $scope.redirect= function(){
        $location.path('/');
    }
});