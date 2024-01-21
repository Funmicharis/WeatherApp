function realDate(date)
{
let hours = date.getHours();
if (hours < 10) { hours = `0${hours}`;}
let minutes = date.getMinutes();
if (minutes < 10) { minutes = `0${minutes}`;}
let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
let day = days[date.getDay()];

let month = date.getMonth();
return `${day} ${hours}:${minutes} minutes`;
}

let dateElement = document.querySelector("#date");
let currentDate =new Date ();
dateElement.innerHTML = realDate(currentDate);

function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector ("#city");
    let searchInput = document.querySelector ("#search-text-input");
    cityElement.innerHTML = searchInput.value;
}
let form = document.querySelector("form")
form.addEventListener("submit", search);

function converttoFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector ("#temperature");
    temperatureElement.innerHTML= 66;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click",converttoFahrenheit);

function converttoCelcius(event){
    event.preventDefault();
    let temperatureElement =document.querySelector ("#temperature");
    temperatureElement.innerHTML=23;
}
let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", converttoCelcius);

function displayWeatherCondition(response){
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);

    document.querySelector("#humidity").innerHTML= response.data.main.humidity;
    document.querySelector("#wind").innerHTML= Math.round(response.data.wind.speed);
    document.querySelector("#description").innerHTML= response.data.weather[0].main;
}
function searchLocation(position){
let apiKey = a3f458c6ccc07a8293005d9f73543948
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeather);
}
function handleSubmit(event){
    event.preventDefault();
    let city = document.querySelector ("#city-input").value;
}
function searchCity (city){
    let apiKey = a3f458c6ccc07a8293005d9f73543948
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeather);
}
    
function getCurrentLocation (event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCity);

}
let dateEle= document.querySelector("#date");
let currentTime =new Date ();
dateEle.innerHTML =formatDate("date");

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener ("submit",handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener ("click",getCurrentLocation);


