async function getWeather() {
    let location = 'London';
    let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d674a55ecc44f0d1f03536de861f665c`);
    let wxData = await url.json();
    console.log(wxData);
}

getWeather();