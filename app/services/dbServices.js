/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\scripts/angular.min.js" />
/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\app/appRoute.js" />

appRoute.factory('dataService',['$http',function($http){
   var servicebase = "http://localhost:3000"
   var appFact ={};
   var addData = function(name){
       console.log('ksdf');
       debugger;
    return $http.post(servicebase +'/addData',name,{headers:"Content-Type:application/json"}).then(function(response){
          console.log(response);
           return response;
       })
   }
   var delData = function(name){
       debugger;
         return $http.post(servicebase+'/delData',name,{headers:"Content-Type:application/x-www-form-urlencoded"}).then(function(response){
            return response
         })
   }
   appFact.addData = addData;
   appFact.delData = delData;
   return appFact;
  }
]);