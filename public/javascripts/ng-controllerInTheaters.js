var app = angular.module("inTheatersApp", []);
app.controller("inTheatersShow", function ($scope, $http,$rootScope) {

    $http.get('/movies').then(function (data) {
        $scope.movies = data.data;
    });
    $scope.getMovieINfo = function(movie){
        console.log(movie)
        $http.get('http://www.omdbapi.com/?t=' + movie + '&apikey=PlsBanMe').then(function(response){
            $rootScope.movieToDisplay = response.data;
            console.log($scope.movieToDisplay)
        })
    }
    // $scope.getMovieInfo = function (name) {
    //     return new Promise(function (resolve, reject) {
    //         var xhr = new XMLHttpRequest();
    //         xhr.open('GET', 'http://www.omdbapi.com/?t=' + name + '&apikey=PlsBanMe', true)
    //         xhr.send(null)
    //         xhr.addEventListener('load', function () {
    //              {
    //                 if (xhr.status >= 200) {
    //                     var movie = JSON.parse(xhr.responseText);

    //                     resolve(movie);
    //                 }
    //                 else {
    //                     reject({ status: xhr.statusText });
    //                 };
    //             };
    //         });
    //         xhr.open('GET', 'http://www.omdbapi.com/?t=' + name + '&apikey=PlsBanMe', true)
    //         xhr.send(null)
    //     })
    // };
});