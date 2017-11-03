var app = angular.module("myApp", []);
app.controller("actorsModal", function($scope, $http){
    
    $http.get('/actors').then(function(data){
        $scope.actors = data.data;
        console.log(data.data);
    });
});