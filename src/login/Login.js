import React from "react";
import '../login/Login.css'
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context";

const Login = () => {

    const [username, setUsername] = React.useState(" ");
    const [password, setPassowrd] = React.useState(' ')
    const context = React.useContext(Context)
    const navigate = useNavigate()

    React.useEffect(() => {
        if (context.state.logedIn === true) {
            navigate('/page-with-forms')
        }
    },
        [context.state.logedIn])

    const handleSubmit = async (event) => {
        context.dispatch({ code: 'LOGIN-USER', payload: { username, password } })
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
                        <input type="text" className="user-input" id="user-login" placeholder="Username" onChange={(event) => handleUsernameChange(event)}></input>
                        <label for='username' className="label-user-login"> Username</label>
                        
                    </div>

                    <div className="group-input">
                        <input type="password"className="user-pass" id="pass-login" placeholder="Password" onChange={(event) => handlePasswordChange(event)}></input>
                        <label for="password" className="laber-pass-login">Password</label>
                        
                    </div>

                </form>
                <div className="submit-btn">
                    <button className="button-log-login" type="submit" onClick={(event) => handleSubmit(event)}  >Submit</button>
                </div>

                <div className="nav-to-register">
                    <p className="nav-para-register"> Don't have an account? </p>
                    <Link to='/'> <button className="button-to-register" type="submit">Register</button></Link>
                </div>
            </div>
        </div>
    </>

}
export default Login