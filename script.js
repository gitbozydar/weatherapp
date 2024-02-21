const apiKey = "3b8c063e3f8db77d29f2ebf7a4ff6e09";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputCity = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");
const weatherImg = document.querySelector(".basic-weather-info img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${Math.round(
    data.wind.speed
  )} km/h`;

  switch (data.weather[0].main) {
    case "Clouds":
      weatherImg.src = "img/cloud.png";
      break;
    case "Clear":
      weatherImg.src = "img/sun.png";
      break;
    case "Rain":
      weatherImg.src = "img/rainy.png";
      break;
    case "Snow":
      weatherImg.src = "img/snowy.png";
      break;
  }

  console.log(data.weather[0].main);
  console.log(data);
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputCity.value);
});
inputCity.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
