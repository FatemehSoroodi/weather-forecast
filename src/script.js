let date = new Date();
let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = date.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let time = `${hour}:${minute}`;

let currentTime = document.querySelector(".time");
currentTime.innerHTML = time;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[date.getMonth()];
let currentDate = date.getDate();
let presentedDate = `${day}, ${currentDate}<sup>rd</sup> ${month}`;

let appDate = document.querySelector(".date");
appDate.innerHTML = presentedDate;

function showWeather(response) {
  document.querySelector("#cityName").innerHTML = response.data.name;
  document.querySelector("#countryName").innerHTML = response.data.sys.country;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  let unit = "metric";
  let apiKey = "eb26c3409a8b440e9ef8cce46c2ec28e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchCity(city);
}

let searchCityName = document.querySelector("#search-city");
searchCityName.addEventListener("submit", showCity);

searchCity("Qeshm");
