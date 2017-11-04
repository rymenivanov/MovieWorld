var app = angular.module("inTheatersApp", []);
app.controller("inTheatersShow", function($scope, $http){

    $http.get('/movies').then(function (data) {
        $scope.movies = data.data;
    });
    
})