var app = angular.module("moviesApp", []);
app.controller("moviesModal", function ($scope, $http) {

    $http.get('/movies').then(function (data) {
        $scope.movies = data.data;
        console.log(data.data);
    });

    $http.get('/actors').then(function (data) {
        $scope.actors = data.data;
        console.log(data.data);
    });
    $scope.startsWith = function (actual, expected) {
        var lowerStr = (actual + "").toLowerCase();
        return lowerStr.indexOf(expected.toLowerCase()) === 0;
    };
    $scope.customFilter = function (item) {

        var typedTextLength = ($scope.typedText) ? ($scope.typedText).length : 0,
            substring = (item.title).substring(0, typedTextLength);

        return ($scope.typedText === substring);

    };

});