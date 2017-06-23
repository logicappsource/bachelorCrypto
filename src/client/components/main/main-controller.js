(function (window, angular, undefined) {
    angular.module('app')
    .controller('mainCtrl', ['$scope', '$state', '$http', 'userSvc', function($scope, $state, $http, userSvc) {
            $scope.userData = userSvc.user; 

            console.log(userSvc.token);
    }]);
})(window, window.angular)