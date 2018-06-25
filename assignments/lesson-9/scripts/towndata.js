// CONNECT TO API //

var townDataRequest = new XMLHttpRequest();
var townDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

townDataRequest.open('GET', townDataURL, true);
townDataRequest.send();

townDataRequest.onload = function() {
    let townData = JSON.parse(townDataRequest.responseText);

    document.getElementById('frank-motto').innerHTML = townData.towns[0].motto;
    document.getElementById('frank-found').innerHTML = townData.towns[0].yearFounded;
    document.getElementById('frank-pop').innerHTML = townData.towns[0].currentPopulation;
    document.getElementById('frank-rain').innerHTML = townData.towns[0].averageRainfall;

    document.getElementById('spring-motto').innerHTML = townData.towns[1].motto;
    document.getElementById('spring-found').innerHTML = townData.towns[1].yearFounded;
    document.getElementById('spring-pop').innerHTML = townData.towns[1].currentPopulation;
    document.getElementById('spring-rain').innerHTML = townData.towns[1].averageRainfall;

    document.getElementById('green-motto').innerHTML = townData.towns[3].motto;
    document.getElementById('green-found').innerHTML = townData.towns[3].yearFounded;
    document.getElementById('green-pop').innerHTML = townData.towns[3].currentPopulation;
    document.getElementById('green-rain').innerHTML = townData.towns[3].averageRainfall;
}
