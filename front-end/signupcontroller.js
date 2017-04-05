(function(){
    angular.module("timewaste")
       .controller('Formcont', ['$scope','$http', function($scope, $http){

        $scope.login = function(){
        console.log($scope.newUser);
         $http.post('/signup', $scope.newUser).then(function(resp){
                            console.log(resp);
                      },
                      function(err){
                            console.log("holy shit");
                      });
    };

}]);
}());