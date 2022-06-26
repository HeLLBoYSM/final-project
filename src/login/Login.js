import React from "react";
import '../login/Login.css'
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Login = () => {

    const [username, setUsername] = React.useState(" ");
    const [password, setPassowrd] = React.useState(' ')
    const context = React.useContext(Context)

    const handleSubmit = async (event) => {
        context.dispatch({code:'LOGIN-USER', payload:{username, password}})
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassowrd(event.target.value)
    }
    

    return <>
    <div className="login-content">
        <div className="form-body">

            <p className="paragraph-login">Login</p>

            <form className="the-form">

                <div className="group-input">
                    <label for='username' className="label-user-login"> Username</label>
                    <input type="text" id="user-login" onChange={(event) => handleUsernameChange(event)}></input>
                </div>

                <div className="group-input">
                    <label for="password" className="laber-pass-login">Password</label>
                    <input type="password" id="pass-login" onChange={(event) => handlePasswordChange(event)}></input>
                </div>

            </form>
            <Link to='/page-with-forms'><button className="button-log" type="submit" onClick={(e) => handleSubmit(e)}  >Submit</button></Link>

            <div className="nav-to-register">
                <p className="nav-para-register"> Don't have an account? </p>
              <Link to='/'> <button className="button-register" type="submit">Register</button></Link>

            </div>
        </div>
        </div>
    </>

}
export default Login