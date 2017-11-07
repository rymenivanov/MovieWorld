var app = angular.module("myApp", ['ngRoute','moviesApp', 'inTheatersApp', 'actorsApp', 'omdbApp', 'searchedMovieApp', 'trailersApp', 'newsApp']);
 
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.htm'     
        })
        .when('/omdbMovie', {
            templateUrl: 'views/omdbTmpl.htm'
        })
        .when('/searchedMovie', {
            templateUrl: 'views/searchedMovie.htm'
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
        .when('/allphotos', {
            templateUrl: 'views/allPhotos.htm'
        })
        .when('/trailers', {
            templateUrl: 'views/allTrailers.htm'
        })
        .when('/', {
            templateUrl: 'views/news.htm'
        })
});

