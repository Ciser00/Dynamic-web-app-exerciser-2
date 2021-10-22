import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'  //import icons here


function WeatherImage({weatherType}){
  switch (weatherType) {
    case 'Clouds'://at least 4
      return <FontAwesomeIcon icon={ faCoffee } />
    case 'Clear':
      return <FontAwesomeIcon icon={ faCoffee } />
    case 'Clouds':
      return <FontAwesomeIcon icon={ faCoffee } />
    case 'Clouds':
      return <FontAwesomeIcon icon={ faCoffee } />
    default:
      return <FontAwesomeIcon icon={ faCoffee } />
  }
}

export default WeatherImage;
