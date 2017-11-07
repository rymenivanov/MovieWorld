var app = angular.module('omdbApp', []);
app.controller('omdbCtrl', function ($scope, $http) {
    $scope.getMovieInfo = function(movie){
        console.log(movie)
        $http.get('http://www.omdbapi.com/?t=' + movie + '&apikey=PlsBanMe').then(function(response){
            $rootScope.movieFromSearch = response.data;
            console.log($scope.movieFromSearch)
        });
    };
});