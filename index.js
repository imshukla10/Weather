const API_KEY = "49d5b6d7e725484baa171302210211"
const BASE_URL= "http://api.weatherapi.com/v1/current.json?"
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const rain = document.getElementById('rain');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');

cityName.addEventListener('change',()=>{
    getWeather();
})

async function getWeather(){
    const data = await fetch(BASE_URL + `key=${API_KEY}&q=${cityName.value}`)
                .then(response=>response.json())
                .then(data=>data);


    temperature.innerHTML = data.current.temp_c;
    rain.innerHTML = data.current.cloud+"%";
    wind.innerHTML = data.current.wind_kph+"km/h";
    humidity.innerHTML = data.current.humidity+"%c"; 
    document.getElementsByClassName('image')[0].src = data.current.condition.icon
    console.log(data)
}
