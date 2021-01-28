/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\scripts/angular.min.js" />
/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\app/appRoute.js" />

appRoute.factory('dataService',[function($injector){
    debugger;
   var addData = function(name){
       console.log('name',name);
   }
   return addData;
}]);