function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function showWeather(response) {
  console.log(response.data);
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = response.data.main.temp;
}

function searchCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-serch");
  findCity(cityName);
}

function searchForCity(city) {
  let apiKey = "4c8d4b100dcf6a5edcc917eb3efe3ec3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchForCity(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#h1");
  let searchForm = document.querySelector("#search-form");
  cityElement.innerHTML = searchForm.value;
  console.log(searchForm.value);
  serachForCity();
}
