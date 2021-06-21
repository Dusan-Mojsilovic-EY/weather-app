"use strict"

var searchButton = document.querySelector('button');
var searchCity = document.querySelector('#city');

var loadingText = document.querySelector('#load');
var weatherBox = document.querySelector('#weather');

var weatherCity = weatherBox.firstElementChild;
var weatherDescription = document.querySelector('#weatherDescription');
var weatherTemperature = weatherBox.lastElementChild;

searchButton.addEventListener('click', searchWeather);

async function searchWeather() {

    var cityName = searchCity.value;
    var apiKey = 'cdc477e5821b2540ec7f353985c4b87c';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => updateWeather(data));
}

function updateWeather(data) {
    weatherCity.textContent = data.name;
    weatherDescription.textContent = data.weather[0].description.toUpperCase();
    weatherTemperature.textContent = data.main.temp;
}