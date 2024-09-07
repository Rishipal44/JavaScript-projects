const store = {
    // weatherInfo: [
    //     {
    //         temp: "28",
    //         city: "New York",
    //         humidity: "50",
    //         wind: "15",
    //         desc: "mosty cloudy"
    //     },
    // ],
};

function addWeatherInfo(newWeatherInfo){
    // console.log(newWeatherInfo);
    store.weatherInfo = newWeatherInfo;
    // console.log(store.weatherInfo);
}


// const handler = {
//     get(target, property){
//         return target[property];  
//     },
//     set(target, property, value){
//         target[property] = value;
//         if(property === "weatherInfo"){
//             window.dispatchEvent(new Event("weatherInfoChanges"));
//         }
//         // localStorage.setItem("store", JSON.stringify(store));
//         return true;
//     },
// };
  


// const storeProxy = new Proxy(store, handler);

// function addWeatherInfo(newWeatherInfo){
//     storeProxy.weatherInfo = storeProxy.weatherInfo.filter((weatherInfo)=>{
//         if(weatherInfo.city !== newWeatherInfo.city){
//             return storeProxy.weatherInfo = newWeatherInfo;;
//         }
//     })
//     // console.log(newWeatherInfo);
//     // storeProxy.weatherInfo = newWeatherInfo;
//     console.log(storeProxy.weatherInfo);
// }


export {addWeatherInfo};
export default store;