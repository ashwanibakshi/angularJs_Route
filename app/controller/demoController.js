/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\scripts/angular.min.js" />
/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\app/appRoute.js" />
/// <reference path="E:\XAMARIN\2021\angularjsdemo2\angularjsdemo2\app/dbServices.js" />

appRoute.controller('myController',['$scope','dataService',function ($scope,dataService) {
    
    $scope.message = "This is page one"
    $scope.home ="we are on home page"

    $scope.user={
        name:''
    }

    $scope.add=function(data){
        console.log(data);
        dataService.addData($scope.user).then(function(response){
            debugger;
           if(response.data.msg=="success"){
               console.log('rspo',response.data.msg);
               $scope.uData = response.data.data;
               $scope.user.name=''
           }  
        });

$scope.msgs='';
      $scope.del=function(data){
          debugger;
          $scope.user.name=data;
          dataService.delData($scope.user).then(function(response){
             if(response.data.msg=='success'){
                 $scope.msg = "data is deleted";
                 $scope.uData = response.data.data;
                 $scope.user.name='';
             }else{
                 $scope.user.name='';
                $scope.msg = "data not deleted";
             }
          });
      }
    } 
}]);