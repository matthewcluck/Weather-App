let place = document.querySelector('#place');
let temperature = document.querySelector('#temperature');
let weatherType = document.querySelector('#weathertype');
let wind = document.querySelector('#wind');
let humidity = document.querySelector('#humidity');
let findLabel = document.querySelector('#findlabel');

async function getWeather() {
    let location = 'London';
    let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d674a55ecc44f0d1f03536de861f665c`);
    let wxData = await url.json();
    console.log(wxData);
}

getWeather();

place.innerHTML = 'London,UK';
temperature.innerHTML = '75°F';
weatherType.innerHTML = 'Rainy';
wind.innerHTML = 'Wind 10 mph NE';
humidity.innerHTML = 'Humidity 40%';