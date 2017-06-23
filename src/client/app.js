(function(window, angular, undefined ) {
    angular.module('app', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider ) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/client/components/home/home.html',
            controller: 'homeCtrl'
        }) 

        .main('main', {
            url: '/main',
            templateUrl:'/client/components/main/main.html',
            controller: 'mainCtrl'
        })

        $urlRouterProvider.otherwise('/'); //Redirect Home / UN secure Routing -> fallback 
    }])
})(window, window.angular) 