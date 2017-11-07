var app = angular.module('searchedMovieApp', []);
app.controller('searchedMovie', function ($scope, $http, $rootScope){
    $http.get('/movies').then(function (data) {
        $scope.movies = data.data;
    });
    
    $scope.getMovieInfo = function(movie){
        console.log(movie)
        $http.get('http://www.omdbapi.com/?t=' + movie + '&apikey=PlsBanMe').then(function(response){
            $rootScope.movieFromSearch = response.data;
            console.log($scope.movieFromSearch)
        });
    };
})