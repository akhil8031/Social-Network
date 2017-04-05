var app = angular.module("navcontroller",[])
.controller('navcont',['$scope','$http','$state',function($scope, $http, $state){
    if(localStorage['User-Data']){
        $scope.loggedIn = true;
    }
    else{
        $scope.loggedIn = false;
    }
    
    $scope.logusrin=function(){
      $http.post('/login', $scope.login).then(function(resp){
          localStorage.setItem('User-Data', JSON.stringify(resp));
          $scope.loggedIn = true;
      },
       function(err){
          console.log("holy shit");
      });
    };
    
    
    $scope.logOut = function(){
        localStorage.clear(0);
        $scope.loggedIn = false;
    };
}]);