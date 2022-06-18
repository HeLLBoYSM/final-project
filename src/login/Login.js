import React from "react";
import '../login/Login.css'
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = React.useState(" ");
    const [password, setPassowrd] = React.useState(' ')

    const handleSubmit = async (event) => {
        event.preventDefault();
        // alert('hello, email ' + password + " " + email)

        try {
            const res = await fetch('', {
                method: 'post',
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    // 'Access-Control-Allow-Origin':'*',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const jsonRes = await res.json()
            console.log(jsonRes)
        } catch (error) {
            console.log(error, 'erroare')
        }
    }


    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassowrd(event.target.value)
    }

    return <>
        <div className="form-body">

            <p className="paragraph-login">Login</p>

            <form className="the-form">

                <div className="group-input">
                    <label for='username' className="label-user-login"> Username</label>
                    <input type="email" id="user-login" onChange={(event) => handleEmailChange(event)}></input>
                </div>

                <div className="group-input">
                    <label for="password" className="laber-pass-login">Password</label>
                    <input type="password" id="pass-login" onChange={(event) => handlePasswordChange(event)}></input>
                </div>

            </form>
            <button className="button-log" type="submit" >Submit</button>

            <div className="nav-to-register">
                <p className="nav-para-register"> Don't have an account? </p>
              <Link to='/'> <button className="button-register" type="submit">Register</button></Link>

            </div>
        </div>
    </>

}
export default Login