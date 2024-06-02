import React from 'react'
import '../css/weatherForm.css';




const WeatherForm = ({ setcurData, setForecastData }) => {

    React.useEffect(() => {
        getWeatherFn('kuching')
    }, [])


    function getWeatherFn(city) {
        const apikey = 'ee84fd6ef80655af529643fa68845492'
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`

        fetch(currentWeatherUrl)
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setcurData(data)
            })


        fetch(forecastWeatherUrl)
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setForecastData(data)
            })
    }

    const searchHandlerFn = e => {
        e.preventDefault();
        const city = document.getElementById('city').value.trim()
        if (city.length > 0) {
            console.log("city : " + city)
            getWeatherFn(city)
        } else {
            window.alert('Please enter a city!')
        }

    }

    return (
        <div>
            <div className='weatherForm-outer-container'>
                <div className='weatherForm-inner-container'>
                    <form className='form' onSubmit={searchHandlerFn} >
                        <input className='input' id='city' placeholder='City Weather' />
                        <div children='btn'>
                            <button className='button-33' type='submit'>Search</button>
                        </div>
                    </form>
                </div>
            </div>


        </div >
    )
}

export default WeatherForm