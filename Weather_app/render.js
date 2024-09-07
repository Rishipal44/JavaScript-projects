import store from "./store.js";

function render(){
    const weather = document.querySelector(".weather");

    const weatherInfo = store.weatherInfo.map((info)=>{
        return `<img src="./images/${info.src}.png" class="weather-icon" alt="rain">
            <h1 class="temp">${info.temp}°c</h1>
            <h3>${info.desc}</h3>
            <h2 class="city">${info.city}</h2>
            <div class="details">
                <div class="col">
                    <img src="./images/humidity.png" alt="humidity-img">
                    <div>
                        <p class="humidity">${info.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="./images/wind.png" alt="humidity-img">
                    <div>
                        <p class="wind">${info.wind} Kmph</p>
                        <p>Wind speed</p>
                    </div>
                </div>
            </div>`;
    }).join();
    // console.log(weatherInfo);

    weather.innerHTML = weatherInfo;
}


export default render;