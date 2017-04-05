(function(){
    angular.module('timewaste')
            .controller('followController',['$scope', '$http', function($scope,$http){
              
                $scope.user = JSON.parse(localStorage['User-Data']);
              console.log($scope.user);  
                $http.get('/users/get').then(function(resp){
                    $scope.users = resp.data;
                    console.log($scope.users);
                });
                
                
                $scope.follow = function(userId,xId){
                    data = {
                        userId:userId,
                        xId:xId
                    }
                    
                    $http.post('/users/follow',data).then(function(){
                        console.log("following ", xId);
});
                };
                
                
                $scope.checkIsFollowing = function(wasterId){
                  for(var i=0,len = $scope.user.data.following.length; i< len; i++)  {
                      if($scope.user.data.following[i].userId === wasterId){
                          return true;
                      }
                  }
                    return false;
                };
            }]);
}());