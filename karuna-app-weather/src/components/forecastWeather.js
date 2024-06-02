import React from 'react'
import '../css/forecastWeather.css';
import ForcastItem from './forcastItem'


const ForecastWeather = ({ forecastData }) => {
    const [forecastHtmlElement, setforecastHtmlElement] = React.useState(<div></div>)

    React.useEffect(() => {
        console.log('here => ' + Object.keys(forecastData).length)
        //console.log('here => ' + forecastData)
        if (Object.keys(forecastData).length > 0) {
            if (forecastData.cod === '404') {
                console.log('Error! 404')
            } else {
                let element = forecastData.list.slice(0, 10).map((item, index) => {
                    return (<ForcastItem props={item} index={index} />)
                })

                setforecastHtmlElement(element)
            }
        }

    }, [forecastData])


    return (
        <div className='forecastWeather-outer-container'>
            <div className='forecastWeather-inner-container'>
                {forecastHtmlElement}
            </div>
        </div>
    )
}

export default ForecastWeather