import React from 'react'
import '../css/mainContent.css';

import Login from './login'
import TodoMain from './todoMain'


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
            {(curUserID === '') ?
                (<div className="body">
                    <br></br>
                    <Login curUserID={curUserID} setCurUserID={setCurUserID} errorPromptFn={errorPromptFn} />
                </div>
                ) :
                (
                    <TodoMain curUserID={curUserID} />
                )}
            <div className='errorbox'>
                <label className='error' id='errorLbl'></label>
            </div>
        </div>
    )
}

export default MainContent