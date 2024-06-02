import React from 'react'
import '../css/forcastItem.css'

const ForcastItem = ({ props, index }) => {

    const forecastTime = new Date(props.dt * 1000)
    const weather = props.weather[0].description
    const iconCode = props.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`
    const tempreture = Math.round(props.main.temp - 273.15)  //kelvin to celcious

    console.log('dddd = ' + weather)

    //<img src={iconUrl} alt='weather-icon' />
    return (
        <div className='forecastItem-outer-container'>
            <div className='forecastItem-inner-container'>
                <div id={index}>{forecastTime.toLocaleTimeString()}</div>
                <img src={iconUrl} alt='weather-icon' />
                <div>{weather}</div>
                <div>{tempreture} &#176;C</div>
            </div>
        </div>
    )
}

export default ForcastItem