import React from 'react'
import './css/Card.css'
import { ImLocation } from 'react-icons/im'


function Card({city,search,url}) {
  return ( 
      <div className='card'>
        <header>
          <h1><ImLocation /> {search}</h1>
        </header>
        <div className="con">
          <div className="sub-div image">
            <img src ={url} alt =""/>
          </div>
          <div className="sub-div text">
            <h3>{ city?.weather[0].description}</h3>
            <span> Max temp: {city?.main.temp_max} {'\xB0'} C</span><br/>
            <span> Min temp: {city?.main.temp_min} {'\xB0'} C</span><br/><br/>
            <span>humidity: { city?.main.humidity}</span>
          </div>  
        </div>   
      </div> 
  )
}

export default Card