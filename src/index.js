let currentTime = new Date();

function formatDate() {
    let days = [
      "Sunday", 
        "Monday", 
          "Tuesday", 
          "Wednesday", 
          "Thursday", 
        "Friday", 
      "Saturday"];
    let day = days[currentTime.getDay()];
    let currentDay = document.querySelector("#current-day")
    currentDay.innerHTML = day; }

formatDate();

function celsiusTemperature() {
    let link = document.querySelector("#temperature")
    link.innerHTML =  14
    }

function farenheitTemperature() {
    let link = document.querySelector("#temperature")
    link.innerHTML =  57
    }

function showWeather(response){
    document.querySelector("#current-head-city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#conditions").innerHTML = response.data.weather[0].description; 
    document.querySelector("#wind-speed").innerHTML = `wind: ${response.data.wind.speed} km/h`;
    document.querySelector("#humidity").innerHTML =`Humidity: ${response.data.main.humidity} %`;
    let icon = document.querySelector("#head-emoji");
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon.setAttribute("alt" , response.data.weather[0].description);
  }
function search (city) {
let apiKey = "7e499109a815c2c14463aa26aad21ebb";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(showWeather);
}

function searchCity(event) {
    event.preventDefault();
    let city =document.querySelector("#search-input").value;
    search(city);
      }

function currentLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);  
    }

function searchCurrentLocation (position) {
    let apiKey = "7e499109a815c2c14463aa26aad21ebb";
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let apiUrlPosition = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlPosition).then(showWeather);
    }

    let locationButton = document.querySelector("#current-button");
    locationButton.addEventListener("click", currentLocation);
   
   function getTime() {
    let currentHour = document.querySelector("#current-hour");
    let hour = currentTime.getHours();
    if (hour <10) {
      hour = `0${hour}`
    }
    let currentMinuets = document.querySelector("#current-minuets");
    let minuets = currentTime.getMinutes();
    if (minuets < 10) {
      minuets = `0${minuets}`
    }
    currentHour.innerHTML = `${hour} :`;
    currentMinuets.innerHTML = minuets;
}


    let cityForm= document.querySelector("#search-city");
    cityForm.addEventListener("submit", searchCity);

search ("Stockholm");
getTime()









