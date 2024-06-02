import React from 'react'
import '../css/mainContent.css';

import WeatherMain from './weatherMain'


const MainContent = ({ curUserID, setCurUserID }) => {
    let myInterval;

    function errorPromptFn(err) {
        const myElement = document.getElementById("errorLbl");
        myElement.innerHTML = err
        if (myInterval !== undefined)
            clearInterval(myInterval);
        myInterval = setTimeout(clearPromptFn, 3000);

        function clearPromptFn() {
            myElement.innerHTML = ''
            clearInterval(myInterval);
            myInterval = undefined
        }
    }

    return (
        <div className='mainContent-outer-container'>
            <div className='mainContent-inner-container'>
                <WeatherMain />
            </div>
            <div className='errorbox'>
                <label className='error' id='errorLbl'></label>
            </div>
        </div>
    )
}

export default MainContent