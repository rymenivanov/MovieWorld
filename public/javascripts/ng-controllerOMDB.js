var app = angular.module('omdbApp', []);
app.controller('omdbCtrl', function ($scope, $http) {

    console.log('zareden')
    // $scope.getMovieINfo = function(movie){
    //     $http.get('http://www.omdbapi.com/?t=' + movie + '&apikey=PlsBanMe').then(function(response){
    //         $scope.movieToDisplay = response.data
    //     })
    //     console.log(movie)
    // }
    
    // $http.get(function(name) {
    //     return new Promise(function (resolve, reject) {
    //         var xhr = new XMLHttpRequest();

    //         xhr.addEventListener('load', function () {
    //             if ((xhr.readyState == 4) || (xhr.readyState == 3)) {
    //                 if (xhr.status >= 200) {
    //                     xhr.open('GET', 'http://www.omdbapi.com/?t=' + name + '&apikey=PlsBanMe', true);
    //                     xhr.send(null);
    //                     var movie = JSON.parse(xhr.responseText);

    //                     resolve(movie);
    //                 }
    //                 else {
    //                     reject({ status: xhr.statusText });
    //                 }
    //             }
    //         })
    //         xhr.open('GET', 'http://www.omdbapi.com/?t=' + name + '&apikey=PlsBanMe', true);
    //         xhr.send(null);
    //     })
    // }).then(function (data) {
    //     $scope.omdbMov = data.data;
    // });
})