// 4156210
//
// var weatherRequest = new XMLHttpRequest();
// var apiURL =
var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=6bc4c6f662e6edbf7ba9fb1a75be0863"
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
    let imagesrc = 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById("icon-weather").src = imagesrc;

}
