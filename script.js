let place = document.querySelector('#place');
let temperature = document.querySelector('#temperature');
let weatherType = document.querySelector('#weathertype');
let wind = document.querySelector('#wind');
let humidity = document.querySelector('#humidity');
let find = document.querySelector('#find');
let findLabel = document.querySelector('#findlabel');

async function getWeather(location) {
    let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d674a55ecc44f0d1f03536de861f665c`);
    let wxData = await url.json();

    place.innerHTML = location + " " + wxData.sys.country;
    let fahrenheit = Math.round((((wxData.main.temp - 273.15)*9)/5) + 32);
    let windMph = Math.round(wxData.wind.speed*2.37);
    temperature.innerHTML = `${fahrenheit}°F`;
    weatherType.innerHTML = `${wxData.weather[0].description}`;
    wind.innerHTML = `Wind ${windMph} mph`;
    humidity.innerHTML = `Humidity ${wxData.main.humidity}%`;
    console.log(wxData);
}

let locationA = 'Arlington';
getWeather(locationA);

find.addEventListener('search', () => {
    let locationB = find.value;
    getWeather(locationB);
})