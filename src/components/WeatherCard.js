import React from 'react';
import WeatherImage from './WeatherImage';

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
    <section className='WeatherCard' style={
      backgroundColor: "rbga(150,150,150, ${cloudiness/100} )",  //check the string literal
      //opacity: (cloudiness)/100,
    }>
      <div className="WeatherImageWrapper">
        <WeatherImage weatherType={weatherType} />
      </div>
      <div className="CurrentTempratureWrapper">
        <h2 className="Subheadder"> Current Temprature </h2>
        <p className="CurrentTemprature"> {currentTemp} </p>
      </div>
      <p> cloudiness : {cloudiness} </p>
      <p> highTemp : {highTemp} </p>
      <p> humidity : {humidity} </p>
      <p> lowTemp : {lowTemp} </p>
      <p> weatherType : {weatherType} </p>
      <p> windSpeed : {windSpeed} </p>
    </section>
  )
}


export default WeatherCard;
//remove consol logs
//day currentDate.getDay  gives num need to pull out from a const list
//style
//add 2 cities
//put 4 or 5 cities across the top
//one box with all the info
//nice background color
//gradiant color background

//vg design 
//web dev
//ux
//watch end of lecture for github pages
