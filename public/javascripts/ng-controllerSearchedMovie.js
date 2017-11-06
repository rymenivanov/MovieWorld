var app = angular.module('searchedMovieApp', []);
app.controller('searchedMovie', function ($scope, $http){
    $http.get('/movies').then(function (data) {
        $scope.movies = data.data;
    });
})