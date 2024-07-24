

let titleLogo = document.querySelector(".title");
let bodyElem = document.querySelector("body");



let cityInput = document.querySelector("#get-city");
cityInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        fetchDataFromApi();
    }
});

let apiData = {
    url: "https://api.openweathermap.org/data/2.5/weather?q=",
    key: "926647cce184fb858894d8f18b1f38b1",
};
cityInput.value = "Lima";
fetchDataFromApi();
cityInput.value = "";

function fetchDataFromApi() {
    let insertedCity = cityInput.value;
    fetch(`${apiData.url}${insertedCity}&lang=sp&&appid=${apiData.key}`)
        .then((res) => res.json())
        .then((data) => addDataToDom(data));
}

let cityName = document.querySelector(".city-name");
let cityTemp = document.querySelector(".weather-deg");
let cityCond = document.querySelector(".weather-condition");
let cityHumidity = document.querySelector(".humidity");
let todayDate = document.querySelector(".date");
let iconoAnimado = document.getElementById('icono-animado');

function addDataToDom(data) {
    cityName.innerHTML = `${data.name}, ${data.sys.country}`;
    cityTemp.innerHTML = `${Math.round(data.main.temp - 273.15)}°c`;
    cityCond.innerHTML = data.weather[0].description;
    cityHumidity.innerHTML = `humedad: ${data.main.humidity}%`;
    todayDate.innerHTML = getDate();

    switch (data.weather[0].main) {
        case 'Thunderstorm':
            iconoAnimado.src = 'picture/thunder.svg'
            console.log('TORMENTA');
            break;
        case 'Drizzle':
            iconoAnimado.src = 'picture/rainy-2.svg'
            console.log('LLOVIZNA');
            break;
        case 'Rain':
            iconoAnimado.src = 'picture/rainy-7.svg'
            console.log('LLUVIA');
            break;
        case 'Snow':
            iconoAnimado.src = 'picture/snowy-6.svg'
            console.log('NIEVE');
            break;
        case 'Clear':
            iconoAnimado.src = 'picture/day.svg'
            console.log('LIMPIO');
            break;
        case 'Atmosphere':
            iconoAnimado.src = 'picture/wather.svg'
            console.log('ATMOSFERA');
            break;
        case 'Clouds':
            iconoAnimado.src = 'picture/cloudy-day-1.svg'
            console.log('NUBES');
            break;
        default:
            iconoAnimado.src = 'picture/cloudy-day-1.svg'
            console.log('por defecto');
        
    }
}

let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
function getDate() {
    let newTime = new Date();
    let month = months[newTime.getMonth()];
    return `${newTime.getDate()} ${month} ${newTime.getFullYear()}`;
}

