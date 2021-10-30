import React, { useEffect, useMemo, useState } from 'react';
import axios from "axios";  //allows you to make http request
import { useLocation } from "react-router-dom";
import WeatherCard from '../components/WeatherCard';

const API_KEY = `3c4dea4cec1a75e9cfbed8f0ecc85df4`;
function useQuery(){
  return new URLSearchParams(useLocation().search);
}

function Home(){
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();
  let query = useQuery();
  useEffect(() =>{
    const cityValue = query.get("city");
    setCity(cityValue);
  }, [query]);
  useEffect(() => {
    if (city) {
      axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
      )
      .then(function (response) {
        setWeatherData(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  }, [city]);

  const { cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed
  } = useMemo(() => {  //destructering the object
    if (!weatherData) return{};
    return{
      cloudiness: weatherData.clouds.all,        //Being percise with API data
      currentTemp: weatherData.main.temp,
      highTemp: weatherData.main.temp_max,
      humidity: weatherData.main.humidity,
      lowTemp: weatherData.main.temp_min,
      weatherType: weatherData.weather[0].main,
    //weatherType: weatherData.weather[0].description,
      windSpeed: weatherData.wind.speed,
    };
  }, [weatherData]);

  return (
    <main className="App">
      <header>
        <div className="CityWrapper">
          <p> <a href="/?city=paris"> Paris </a> </p>
          <p> <a href="/?city=tokyo"> Tokyo </a> </p>
          <p> <a href="/?city=albany"> Albany </a> </p>
          <p> <a href="/?city=rochester"> Rochester </a> </p>
          <p> <a href="/?city=rome"> Rome </a> </p>
        </div>
      </header>
      <WeatherCard
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humidity={humidity}
        lowTemp={lowTemp}
        windSpeed={windSpeed}
        weatherType={weatherType}
      />
    </main>
  );

}

export default Home;
