import React from 'react';
import WeatherImage from './WeatherImage';
function WeatherCard({
  cloudiness="Unknow",
  currentTemp="Unknow",
  highTemp="Unknow",
  humidity="Unknow",
  lowTemp="Unknow",
  weatherType="Unknow" ,
  weatherDescription="Unknow",
  windSpeed="Unknow",
})  {
  return(
    <section
      className="WeatherCard"
      style={{backgroundColor: `rgba(150,150,150, ${cloudiness/100})`}}
    >
    <div className="Lvl1Wrapper">
      <div className="WeatherImageWrapper">
        <WeatherImage weatherType={weatherType} />
      </div>
      <div className="CurrentTempratureWrapper">
        <h2 className="Subheadder"> Current Temprature: </h2>
        <p className="CurrentTemprature"> {currentTemp} </p>
        <div className="LowHighTempWrapper">
          <h2 className="Subheadder"> Low Temp :</h2>
          <p className="CurrentLowTemp"> {lowTemp} </p>
          <h2 className="Subheadder">High Temp :</h2>
          <p className="CurrentHighTemp"> {highTemp} </p>
        </div>
      </div>
    </div>
    <div className="Lvl2Wrapper">
      <div className="CurrentCloudinessWrapper">
        <h2 className="Subheadder"> Cloudiness: </h2>
        <p className="CurrentCloudiness"> {cloudiness} </p>
      </div>
      <div className="CurrentHumidityWrapper">
        <h2 className="Subheadder"> Humidity: </h2>
        <p className="CurrentHumidity"> {humidity} </p>
      </div>
      <div className="CurrentWeatherTypeWrapper">
        <h2 className="Subheadder"> Weather Type: </h2>
        <p className="CurrentWeatherType"> {weatherType} </p>
      </div>
      <div className="CurrentWindSpeedWrapper">
        <h2 className="Subheadder"> Wind Speed: </h2>
        <p className="CurrentWindSpeed"> {windSpeed} </p>
      </div>
    </div>
    </section>
  )
}


export default WeatherCard;
