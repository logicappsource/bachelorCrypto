(function(window, angular, undefined ) {
    angular.module('app')
    .controller('homeCtrl', ['$scope', '$http', function( $scope, $http){
        $scope.createUser = function(user) {
            $http.post('/api/user/create', user).then(function(response) {
                console.log(response);
            }, function(err) {
                console.log(err);
            
            })
        };
        $scope.logUserIn = function(user) {
            $http.post('/api/user/login', user).then(function(response ) {
                console.log(response);
            }, function(err) {
                console.log(err); 
            })
        }
    }])
})(window, window.angular);