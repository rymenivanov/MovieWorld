var app = angular.module("inTheatersApp", []);
app.controller("inTheatersShow", function ($scope, $http, $rootScope) {

    $http.get('/movies').then(function (data) {
        $scope.movies = data.data;
    });
    $scope.getMovieINfo = function(movie){
        console.log(movie);
        $http.get('http://www.omdbapi.com/?t=' + movie + '&apikey=PlsBanMe').then(function(response){
            $rootScope.movieToDisplay = response.data;
            console.log($scope.movieToDisplay);
        });
    };
});