const form = document.querySelector("#form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const temp = document.querySelector("#temp");
const descrip = document.querySelector("#descrip");


btn.addEventListener("click", () => {
    checkweather = search.value;
});

async function checkweather(city) {
    const apiKey = "5caa2387278c4e6d0d983394475cc10e";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}`;
    const weatherdata = await fetch(`${url}`).then(response => response.json());
    console.log(weatherdata);

    temp.innerHTML = `${Math.round(weatherdata.main.temp)-273}°C`;
    descrip.innerHTML = `${weatherdata.weather[0].description}`;
    wind.innerHTML = `${weatherdata.wind.deg}`;
    humidity.innerHTML = `${weatherdata.main.humidity}%`;
}



search.addEventListener('click', () => {
    checkweather(search.value);
});
