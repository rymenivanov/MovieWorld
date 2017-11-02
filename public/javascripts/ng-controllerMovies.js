var app = angular.module("myApp", []);
app.controller("moviesModal", function($scope, $http){
    

    $http.get('/movies').then(function(data){
        $scope.movies = data.data;
        console.log(data.data)
    })
});