import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBolt, faCloud, faSun, faSnowflake, faCloudRain, faUmbrella } from '@fortawesome/free-solid-svg-icons'  //import icons here
function WeatherImage({weatherType}){  //in WeatherImageWrapper
  switch (weatherType) {
    case 'Clouds':
      return <FontAwesomeIcon icon={ faCloud } />
    case 'Clear':
      return <FontAwesomeIcon icon={ faSun } />
    case 'Snow':
      return <FontAwesomeIcon icon={ faSnowflake } />
    case 'Rain':
      return <FontAwesomeIcon icon={ faCloudRain } />
    case 'Drizzle':
      return <FontAwesomeIcon icon={ faUmbrella } />
    case 'Thunderstorm':
      return <FontAwesomeIcon icon={ faBolt } />
    default:
      return <FontAwesomeIcon icon={ faCloud } />
  }
}

export default WeatherImage;
