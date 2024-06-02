import React from 'react'
import logo from '../logo.svg';
import '../css/header.css';

const Header = ({ curUserID, setCurUserID }) => {

    React.useEffect(function () {
        const myElement = document.getElementById('logoutBtn')
        if (curUserID === '') {
            myElement.disabled = true
        } else {
            myElement.disabled = false
        }
    }, [curUserID])

    const logoutFn = () => {
        setCurUserID('')
    }

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <div>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;</div>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <p className='user'>{curUserID}</p>
            <button id='logoutBtn' className='logout' onClick={logoutFn}>logout</button>
        </header>
    )
}

export default Header