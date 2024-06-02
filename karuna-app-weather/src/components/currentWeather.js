import React from 'react'
import '../css/currentWeather.css';


const CurrentWeather = ({ curData }) => {
    const [curHtmlElement, setcurHtmlElement] = React.useState(<div></div>)
    const [dateTimeHtmlElement, setDateTimeHtmlElement] = React.useState(<div></div>)

    React.useEffect(() => {
        console.log('here => ' + Object.keys(curData).length)
        console.log('here => ' + curData)
        if (Object.keys(curData).length > 0) {
            if (curData.cod === '404') {
                console.log('Error! 404')
            } else {
                const city = curData.name
                const tempreture = Math.round(curData.main.temp - 273.15)  //kelvin to celcious
                const desc = curData.weather[0].description
                const iconCode = curData.weather[0].icon
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`

                const wind_speed = curData.wind.speed
                const wind_deg = curData.wind.deg


                let element = (<div><hr />
                    <div>location : {city}</div>
                    <img src={iconUrl} alt='weather-icon' />
                    <div>weather : {desc}</div>
                    <div>tempreture : {tempreture} &#176;C</div>
                    <div>wind-speed : {wind_speed} m/s</div>
                    <div>wind-deg : {wind_deg} N</div>
                </div>)

                setcurHtmlElement(element)
            }
        }


    }, [curData])



    function updateDateTime() {
        const myDate = new Date()
        const localTime = myDate.toLocaleTimeString()           //8:47:57 am
        const utcTime = myDate.toTimeString();                  //08:55:05 GMT+0800 (Malaysia Time)
        const dateString = myDate.toDateString()                //Sun Jun 02 2024
        /*
        myDate.toLocaleString() -> 02/06/2024, 9:02:27 am
        myDate.toISOString()    -> 2024-06-02T01:06:33.844Z
        myDate.toUTCString()    -> Sun, 02 Jun 2024 01:01:05 GMT
        */
        const element = (<div>
            <div className='time'>{localTime}</div>
            <div>{dateString}</div>
            <div>{utcTime}</div>
        </div>)
        setDateTimeHtmlElement(element)
    }

    React.useEffect(() => {
        setInterval(updateDateTime, 1000);
    }, [])


    return (
        <div className='currentWeather-outer-container'>
            <div className='currentWeather-inner-container'>
                <div>{dateTimeHtmlElement}</div>
                <div>{curHtmlElement}</div>
            </div>
        </div >
    )
}

export default CurrentWeather