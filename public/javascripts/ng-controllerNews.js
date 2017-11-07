var app = angular.module("newsApp", [])

app.controller('newsShow', function($scope, $http){
    $http.get('/news').then(function(data){
        $scope.news = data.data;
    })
})