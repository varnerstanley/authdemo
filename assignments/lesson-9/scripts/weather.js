var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=6bc4c6f662e6edbf7ba9fb1a75be0863';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById('cur-temp').innerHTML = weatherData.main.temp_max;

    document.getElementById('humidity-level').innerHTML = weatherData.main.humidity;

    document.getElementById('wind-speed').innerHTML = Math.round(weatherData.wind.speed);

    document.getElementById('clouds').innerHTML = weatherData.clouds.all;

    document.getElementById('cur-description').innerHTML = weatherData.weather[0].description;

    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weather-icon').src = imagesrc;

}
