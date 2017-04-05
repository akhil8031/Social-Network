(function(){
    angular.module("timewaste")
                   .controller('MainController',['$scope','$http','$interval',function($scope, $http, $interval){
                       
                       if(localStorage['User-Data'] != undefined){
                           $scope.user = JSON.parse(localStorage['User-Data']);
                           console.log($scope.user);
                       }
                       
                       $scope.sendWaste = function(event){
                           if(event.which===13){
                               var request = {
                                   user:$scope.user.data.username || $scope.user.data.email,
                                   userId:$scope.user.data._id,
                                   userImage:$scope.user.data.image,
                                   
                                   content: $scope.newWaste
                               }
                               
                               $http.post('/waste',request).then(function(response){
                                   $scope.wastes = response;
                                   console.log($scope.wastes);
                               },
                                function(err){
                                    console.log(err);
                               });
                           }
                       };
                       
                       function getWastes(initial){
                           $http.get('/waste/get').then(function(resp){
                               if(initial){
                                   $scope.wastes = resp;
                               } else {
                                  if(resp.length > $scope.wastes.length){
                                      $scope.incomingWastes = resp;
                                  } 
                               }
                           });
                       }
                       
                       
                       $interval(function(){
                           getWastes(false);
                           if($scope.incomingWastes){
                             $scope.diff = $scope.incomingWastes.length-$scope.wastes.length;  
                           }
                           console.log('working');
                       },5000);
                       
                       $scope.setNewWastes = function(){
                           $scope.wastes = angular.copy($scope.incomingWastes);
                           
                           $scope.incomingWastes = undefined;
                       };
                       
                       getWastes(true);
                       
                       
                       
                       
                   }]);
}());