/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\scripts/angular.min.js" />
/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\app/appRoute.js" />
/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\app/dbServices.js" />

appRoute.controller('myController',['$scope','dataService',function ($scope,dataService) {
    
    $scope.message = "This is page one"
    $scope.home ="we are on home page"

}]);