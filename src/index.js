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


function showWeather(response){
   defaultCelsiusTemperature = response.data.main.temp;

    document.querySelector("#current-head-city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(defaultCelsiusTemperature);
    document.querySelector("#conditions").innerHTML = response.data.weather[0].description; 
    document.querySelector("#wind-speed").innerHTML = `wind: ${response.data.wind.speed} km/h`;
    document.querySelector("#humidity").innerHTML =`Humidity: ${response.data.main.humidity} %`;
    let icon = document.querySelector("#head-emoji");
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon.setAttribute("alt" , response.data.weather[0].description);
       }

    function showForecast(response) {
      document.querySelector("#day-1-temp").innerHTML = Math.round(response.data.list[7].main.temp);
     let icon = document.querySelector("#day-emoji1");
       icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[7].weather[0].icon}@2x.png`);
    icon.setAttribute("alt" , response.data.list[7].weather[0].description);
          let days = [
      "Sunday", 
        "Monday", 
          "Tuesday", 
          "Wednesday", 
          "Thursday", 
        "Friday", 
      "Saturday"];
      let day = new Date(response.data.list[7].dt_txt);
      let getDay = days[day.getDay()];
    let dayOne = document.querySelector("#weekday1")
    dayOne.innerHTML = getDay; 
   

      document.querySelector("#day-2-temp").innerHTML = Math.round(response.data.list[15].main.temp);
     let iconTwo = document.querySelector("#day-emoji2");
       iconTwo.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[15].weather[0].icon}@2x.png`);
    iconTwo.setAttribute("alt" , response.data.list[15].weather[0].description);

let day2 = new Date(response.data.list[15].dt_txt);
      let getDay2 = days[day2.getDay()];
    let dayTwo = document.querySelector("#weekday2")
    dayTwo.innerHTML = getDay2; 


     document.querySelector("#day-3-temp").innerHTML = Math.round(response.data.list[23].main.temp);
     let iconThree = document.querySelector("#day-emoji3");
       iconThree.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[23].weather[0].icon}@2x.png`);
    iconThree.setAttribute("alt" , response.data.list[23].weather[0].description);

let day3 = new Date(response.data.list[23].dt_txt);
      let getDay3 = days[day3.getDay()];
    let dayThree = document.querySelector("#weekday3")
    dayThree.innerHTML = getDay3; 
    
     document.querySelector("#day-4-temp").innerHTML = Math.round(response.data.list[31].main.temp);
     let iconFour = document.querySelector("#day-emoji4");
       iconFour.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[31].weather[0].icon}@2x.png`);
    iconFour.setAttribute("alt" , response.data.list[31].weather[0].description);

    let day4 = new Date(response.data.list[31].dt_txt);
    let getDay4 = days[day4.getDay()];
    let dayFour = document.querySelector("#weekday4")
    dayFour.innerHTML = getDay4; 

    document.querySelector("#day-5-temp").innerHTML = Math.round(response.data.list[39].main.temp);
    let iconFive = document.querySelector("#day-emoji5");
    iconFive.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`);
    iconFive.setAttribute("alt" , response.data.list[39].weather[0].description);

    let day5 = new Date(response.data.list[39].dt_txt);
    let getDay5 = days[day5.getDay()];
    let dayFive = document.querySelector("#weekday5")
    dayFive.innerHTML = getDay5; 
          }
          
    function search (city) {
    let apiKey = "7e499109a815c2c14463aa26aad21ebb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=
    ${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);

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

function farenheitTemperature(event) {
    event.preventDefault();  
    let temperatureChange = document.querySelector("#temperature");
     let farenheitTemp = ( defaultCelsiusTemperature* 9/5) + 32;
    temperatureChange.innerHTML = Math.round(farenheitTemp);
    }
    function celsiusTemperature(event) { 
      event.preventDefault();
       let temperatureChange = document.querySelector("#temperature");
    temperatureChange.innerHTML = Math.round(defaultCelsiusTemperature);
    }

    let cityForm= document.querySelector("#search-city");
    cityForm.addEventListener("submit", searchCity);

   let defaultCelsiusTemperature = null;
   let locationButton = document.querySelector("#current-button");
    locationButton.addEventListener("click", currentLocation);

  let farenheit =document.querySelector("#farenheit");
  farenheit.addEventListener("click", farenheitTemperature);
  let celsius = document.querySelector("#celsius");
  celsius.addEventListener("click", celsiusTemperature);


search ("Stockholm");
getTime();





