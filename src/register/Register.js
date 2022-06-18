import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

const Register = () => {

    const [email,setEmail] = React.useState('')
    const [password, setPassowrd] = React.useState('')
    const [username,setUsername] = React.useState('')

    const handleEmailChange = (event) =>{
      setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
      setPassowrd(event.target.value)
    }
    const handleUsernameChange = (event) => {
      setUsername(event.target.value)
    }
    const handleLoginButton = (e) => {
      e.preventDefault()
    }
    

  return (
    <div className="App">
     
      <div className="body">
        <div className="image"></div>

        <p className="paragraph-register"> Register</p>
        <div className="form">

          <form method="GET" >

            <div className="input-group">
              <label for="username" className='input-label-user' onChange={(event)=>handleUsernameChange(event)}>Username</label>
              <input type="text" className="input" id="user" required ></input>
            </div>

            <div className="input-group">
              <label for='password' className='input-label-pass'>Password</label>
              <input type="password" id="pass" required onChange={(event)=>handlePasswordChange(event)}></input>

            </div>

            <div className="input-group">
              <label for="email" className='input-label-email'onChange={(event)=>handleEmailChange(event)}> Email</label>
              <input type="email" id="email" required></input>
            </div>


          </form>

        </div>
        <div>
        <button className="button-submit" type="submit">Submit</button>
        </div>

        <div className=" to-login">
          <p className='already-account'>Have an account already?</p>
         <Link to='/login'> <button className="button-log" type="submit" onClick={() => handleLoginButton()}> Login</button></Link>
        </div>

      </div>
    </div>



  );


}


export default Register;
