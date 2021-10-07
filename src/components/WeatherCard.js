import React from 'react';

function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humidity,
  lowTemp,
  weatherType,
  windSpeed
})  {
  return(
    <section className='WeatherCard'>
      <p>
        cloudiness : {cloudiness}
      </p>
      <p>
        currentTemp : {currentTemp}
      </p>
      <p>
        highTemp : {highTemp}
      </p>
      <p>
        humidity : {humidity}
      </p>
      <p>
        lowTemp : {lowTemp}
      </p>
      <p>
        weatherType : {weatherType}
      </p>
      <p>
        windSpeed : {windSpeed}
      </p>







    </section>
  )
}

export default WeatherCard;
