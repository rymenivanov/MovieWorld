var app = angular.module("actorsApp", []);
app.controller("allActors", function($scope, $http){

    $http.get('/actors').then(function (data) {
        $scope.actors = data.data;
    });
});