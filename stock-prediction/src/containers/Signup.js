import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Signup.css'


let Signup = () => {

    return (<>
        <Header />
        <div className="signup_wrapper">
            <div className="signup_container">
                <form action="PUT">
                    <label htmlFor="email">Email</label><br />
                    <input type="text" id='email' placeholder='example@gmail.com' autofocus required /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" placeholder='*********' required />
                    <div className="buttons">
                        <button type='submit'>Login</button>
                        <button type='submit'>SignUp</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </>)
}


export default Signup