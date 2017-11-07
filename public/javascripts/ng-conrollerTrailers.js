var app = angular.module("trailersApp", []);
app.controller("allTrailersCtrl", function($scope, $http){
    $http.get('/movies').then(function (data) {
        $scope.trailers = data.data;
    });
})
app.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])