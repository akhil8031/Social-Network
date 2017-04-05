(function(){
    angular.module('timewaste')
    .controller('EditProfCont', ['Upload','$scope', '$http', '$state', function(Upload, $scope, $http, $state){
        $scope.user = JSON.parse(localStorage['User-Data']);
        
        $scope.$watch(function(){
            return $scope.file;
        }, function(){
            $scope.upload($scope.file);
        })
        $scope.upload = function(file){
            if(file){
                Upload.upload({
                    url:'/editprof',
                    method:'POST',
                    data:{userId:$scope.user.data._id},
                    file: file
                }).progress(function(evt){
                    console.log("firing");
                }).success(function(data){
                    
                }).error(function(){
                    console.log(error);
                })
            }
        };
        
        
        
        $scope.updateUserName = function(){
            var request = {
                userId:$scope.user.data._id,
                username: $scope.user.username
            }
            $http.post('/updateUsername', request).then(function(){
                console.log("success");
            },function(error){
                console.log("error");
            });
        };
        
        
        $scope.updateBio = function(){
            var request = {
                userId : $scope.user.data._id,
                userbio: $scope.user.bio
            }
            
            $http.post('/updateBio', request).then(function(){
                console.log("success");
            },function(error){
                console.log("error");
            });
        };
    }]);
}());