// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "03826a7a117f4b3aab5597286cba5964",
//   'q': "bitcoin",
//   'sort': "newest",
//   'hl': "true"
// });

// var timesRequest = new XMLHttpRequest();
// var apiUrl ='https://api.nytimes.com/svc/search/v2/articlesearch.json?qbitcoin&api-key=03826a7a117f4b3aab5597286cba5964';
//
// timesRequest.open('GET', apiUrl, true);
// timesRequest.send();
//
// timesRequest.onload = function() {
//   var articles = data.response.docs;
//   console.log(data.response.docs[0].headline.main);
//
//   for (var i = 0; i < articles.length; i++) {
//     createElement('h1', articles[i].headline.main);
//     createP(articles[i].snippet);
//
// }

var timesRequest = new XMLHttpRequest();
var apiUrl ='https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=03826a7a117f4b3aab5597286cba5964&qairbnb';

timesRequest.open('GET', apiUrl, true);
timesRequest.send();
timesRequest.onload = function() {
  let timesData = JSON.parse(timesRequest.responseText);
      console.log(timesData);

      document.getElementById("main-page").innerHTML = timesData.response.docs[0].headline.main;
      document.getElementById("snippet").innerHTML = timesData.response.docs[1].snippet;



    //   var articles = timesData.response.docs;
    //
    //   var page = document.getElementById('main-page');
    //   for (var i = 0; i < articles.length; i++) {
    //     var details = document.createElement('h1');
    //     details.className = 'card';
    //     page.appendChild(details);
    //
    //     document.createElement('h1', articles[i].headline.main);
    //     document.createElement('p', articles[i].snippet);
    // }
    // var page = getElementById('main-page');
    // for(var i = 0; i < cards; i++){
    //     var backside = document.createElement("div");
    //     backside.className = 'card';
    //     board.appendChild(backside);
    // }
};


// var weatherRequest = new XMLHttpRequest();
// var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=6bc4c6f662e6edbf7ba9fb1a75be0863';
// weatherRequest.open('GET', apiURL, true);
// weatherRequest.send();
//
// weatherRequest.onload = function() {
//     let weatherData = JSON.parse(weatherRequest.responseText);
//
//     document.getElementById('cur-temp').innerHTML = weatherData.main.temp_max;
//
//     document.getElementById('humidity-level').innerHTML = weatherData.main.humidity;
//
//     document.getElementById('wind-speed').innerHTML = Math.round(weatherData.wind.speed);
//
//     document.getElementById('clouds').innerHTML = weatherData.clouds.all;
//
//     document.getElementById('cur-description').innerHTML = weatherData.weather[0].description;
//
//     let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
//     document.getElementById('weather-icon').src = imagesrc;
//
// }
