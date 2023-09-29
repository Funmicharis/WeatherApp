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