import React from 'react'
import WeatherForm from './weatherForm'
import '../css/weatherMain.css';
import CurrentWeather from './currentWeather'
import ForecastWeather from './forecastWeather'


const WeatherMain = () => {
    const [curData, setcurData] = React.useState({})
    const [forecastData, setForecastData] = React.useState({})


    return (
        <div className='.weatherMain-outer-container'>
            <div>
                <WeatherForm setcurData={setcurData} setForecastData={setForecastData} />
                <CurrentWeather curData={curData} />
                <ForecastWeather forecastData={forecastData} />
            </div>
        </div>
    )
}

//<pre>{JSON.stringify(forecastData, null, 2)}</pre>


export default WeatherMain