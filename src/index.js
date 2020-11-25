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
    console.log(response.data); 
    }

function searchCity(event) {
    event.preventDefault();
    let apiKey = "7e499109a815c2c14463aa26aad21ebb";
    let city =document.querySelector("#search-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

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
    let currentHour = document.querySelector("#current-hour");
    let hour = currentTime.getHours();
    let currentMinuets = document.querySelector("#current-minuets");
    let minuets = currentTime.getMinutes();
    currentHour.innerHTML = hour;
    currentMinuets.innerHTML = minuets;


    let cityForm= document.querySelector("#search-city");
    cityForm.addEventListener("submit", searchCity);












