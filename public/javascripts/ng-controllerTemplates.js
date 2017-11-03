var app = angular.module("myApp", ['ngRoute','moviesApp']);
 
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.htm',
            
        })
        .when('/moviestmpl', {
            templateUrl: 'views/moviesTmpl.htm'
        })
});

