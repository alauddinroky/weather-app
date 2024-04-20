import React, { useState } from "react";
import {
  clear,
  cloud,
  drizzle,
  humidity,
  rain,
  search,
  snow,
  wind,
} from "../../static/ImageExporter";
import "./weatherApp.css";

function WeatherApp() {
  let api_key = "8f211d888bfa3fb502fcac7c7cb5aee8";
  const [weatherIcon, setWeatherIcon] = useState(cloud);
  const searchFunc = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    const temp = document.getElementsByClassName("weather-temp")[0];
    const location = document.getElementsByClassName("weather-location")[0];
    const humidityFunc = document.getElementsByClassName("weather-humidity")[0];
    const windFunc = document.getElementsByClassName("weather-wind")[0];

    temp.innerHTML = data.main.temp + "°c";
    location.innerHTML = data.name;
    humidityFunc.innerHTML = data.main.humidity + "%";
    windFunc.innerHTML = data.wind.speed + "km/h";
    console.log(data.weather[0].icon);

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeatherIcon(clear);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWeatherIcon(cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWeatherIcon(cloud);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWeatherIcon(cloud);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWeatherIcon(drizzle);
    } else if (
      data.weather[0].icon === "100d" ||
      data.weather[0].icon === "10n"
    ) {
      setWeatherIcon(rain);
    } else if (
      data.weather[0].icon === "110d" ||
      data.weather[0].icon === "11n"
    ) {
      setWeatherIcon(rain);
    } else if (
      data.weather[0].icon === "130d" ||
      data.weather[0].icon === "13n"
    ) {
      setWeatherIcon(snow);
    } else {
      setWeatherIcon(clear);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div className="search-icon" onClick={searchFunc}>
          <img src={search} alt="search icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={weatherIcon} alt="cloud" />
      </div>
      <div className="weather-temp">0°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="humidity" className="icon" />
          <div className="data">
            <div className="weather-humidity">63%</div>
            <div className="text">humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="humidity" className="icon" />
          <div className="data">
            <div className="weather-wind">18 k.m/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
