const KEY = BanMePlz
function getMovieInfo(movieTitle) {
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
        xhr.open('GET', 'http://www.omdbapi.com/?t='+movieTitle+'&apikey='+key, true)
        xhr.send(null)
    })
}
