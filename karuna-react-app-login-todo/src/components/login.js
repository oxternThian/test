import React from 'react'
import '../css/login.css';


const Login = ({ curUserID, setCurUserID, errorPromptFn }) => {


    function savaLocal(userData, storage) {
        console.log('here->savaLocal')
        localStorage.setItem(storage, JSON.stringify(userData));
    }

    function getLocal(storage) {
        const d = localStorage.getItem(storage);
        //const promise1 = await Promise.resolve(d);
        //console.log("data: ", JSON.parse(d));
        return JSON.parse(d)
    }

    const createUserFn = () => {
        /*const user = 'user001'
        const pass = '123'
        savaLocal({ pass: pass }, user)*/

        for (let i = 1; i < 4; i++) {
            const user = 'user00' + i
            const pass = '123'
            savaLocal({ pass: pass }, user)
        }

        errorPromptFn('Temporary local user account created! user001, user002, user003; default password : 123')
    }


    const handleSubmit = e => {
        e.preventDefault();
        console.log("here->handleSubmit")
        let myElement = document.getElementById("user");
        const id = myElement.value.trim()
        myElement = document.getElementById("pass");
        const pass = myElement.value.trim()
        console.log(id + ' ' + pass)


        try {
            const p = getLocal(id)
            console.log('p=' + p)
            if (p === null) {
                console.log('no record!')
                errorPromptFn('No record!')
            } else if (p.pass === pass) {
                console.log('pass granted!')
                setCurUserID(id)
            } else {
                console.log('invalid password!')
                errorPromptFn('invalid password!')
            }
        }
        catch (err) {
            //document.getElementById("demo").innerHTML = err.message;
            console.log("ERROR! " + err.message)
        }
    }

    return (
        <div className='login-outer-container'>
            <div className='login-inner-container'>
                <form onSubmit={handleSubmit}>
                    <p>Login</p>
                    <input className='input' type="text" id='user' placeholder='User ID' />
                    <br />
                    <input className='input' type='password' id='pass' placeholder='Password' />
                    <br />
                    <div className='row'>
                        <button className='button-8' type='button' onClick={createUserFn}>Create User</button>
                        <button className='button-8' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

