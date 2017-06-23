(function(window, angular, undefined ) {
    angular.module('app')
    .controller('homeCtrl', ['$scope', '$http', 'userSvc', function( $scope, $http, userSvc){
        $scope.createUser = function(user) {
            $http.post('/api/user/create', user).then(function(response) {
                console.log(response);
            }, function(err) {
                console.log(err);
            })
        };
        $scope.logUserIn = function(user) {
            $http.post('/api/user/login', user).then(function(response ) {
                userSvc.token = response.data.totken; 
                userSvc.user = response.data.user;
                localStorage.setItem('token', JSON.stringify(userSvc.token));
                localStorage.setItem('user', JSON.stringify(userSvc.user));
                $state.go('main');
            }, function(err) {
                console.log(err); 
            })
        }
    }])
})(window, window.angular);