var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';

var apiKey = '&APPID=6bc4c6f662e6edbf7ba9fb1a75be0863';
var units = '&units=imperial';

function setup() {

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}
function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);

}

function gotData(data) {
  weather = data;
}
