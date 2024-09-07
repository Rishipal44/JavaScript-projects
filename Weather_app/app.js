import render from "./render.js";
import store from "./store.js";
import {addWeatherInfo} from "./store.js";
// 8020b23de2eaf0b92f9592aca5ee7290
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const apiKey = "8020b23de2eaf0b92f9592aca5ee7290";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


// window.addEventListener("weatherInfoChange", ()=>{
//     render();
// });

// render();

async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    const error = document.querySelector(".error");
    const weather = document.querySelector(".weather");
    if(!response.ok){
        error.style.display = "block";
        weather.style.display = "none";
    }
    else {
        const data = await response.json();
    
    // console.log(data);
        const temp = Math.floor(data.main.temp);
        const city = data.name;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const desc = data.weather[0].description;
        const src = data.weather[0].main;

        const newWeatherInfo = [{
            temp : temp,
            city : city,
            humidity : humidity,
            wind : wind,
            desc : desc,
            src : src
        }];

        addWeatherInfo(newWeatherInfo);
        render();
        error.style.display = "none";
        weather.style.display = "block";
    }
    
}

// checkWeather("Meerut");


const inputbox = document.querySelector(".input-box");
const searchbtn = document.querySelector(".search-btn");

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const inputboxValue = inputbox.value;
    checkWeather(inputboxValue);
    inputbox.value = "";
});