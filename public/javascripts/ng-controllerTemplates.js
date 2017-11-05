var app = angular.module("myApp", ['ngRoute','moviesApp', 'inTheatersApp', 'actorsApp']);
 
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.htm'     
        })
        .when('/moviestmpl', {
            templateUrl: 'views/moviesTmpl.htm'
        })
        .when('/intheaters', {
            templateUrl: 'views/inTheaters.htm'
        })
        .when('/allactors', {
            templateUrl: 'views/allActors.htm'
        })
});

