var app = angular.module("inTheatersApp", []);
app.controller("inTheatersShow", function($scope, $http){

    $http.get('/movies').then(function (data) {
        $scope.movies = data.data;
    });
    $scope.getMovieInfo = function(name){
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
        
                xhr.addEventListener('load', function () {
                    if ((xhr.readyState == 4) ||(xhr.readyState == 3)){
                        if (xhr.status >= 200) {
                            var movie = JSON.parse(xhr.responseText);
        
                            resolve(movie)
                        }
                        else {
                            reject({ status: xhr.statusText})
                        }
                    }
                })
                xhr.open('GET', 'http://www.omdbapi.com/?t='+name+'&apikey=PlsBanMe', true)
                xhr.send(null)
            }).then(function(movie){
                console.log(movie);
            })
    }
})