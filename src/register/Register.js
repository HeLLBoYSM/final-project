import React from 'react'
import './Register.css';
import { Link,  useNavigate} from 'react-router-dom';
import { Context } from '../Context';

const Register = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassowrd] = React.useState('')
  const [username, setUsername] = React.useState('')
  const context = React.useContext(Context)
  
  const navigate = useNavigate()
 

  const handleEmailChange = (event) => {
    console.log(event.target.value)
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
  const handleSubmit = (e) => {
    context.dispatch({code:'ADD-USER', payload:{username,password,email}})
    navigate('/login')
  }
  console.log(context.state)

  return (
    <div className="App">

      <div className="body">
        <div className="image"></div>

        <p className="paragraph-register"> REGISTER</p>
        <div className="form">

          <form method="GET" >

            <div className="input-group">
              <input type="text" className="input-user" placeholder='Username' id="user" required onChange={(event) => handleUsernameChange(event)}></input>
              <label for="username" className='input-label-user' >Username</label>
              
            </div>

            <div className="input-group">
              <input type="password" className="input-pass" placeholder='Password' id="pass" required onChange={(event) => handlePasswordChange(event)}></input>
              <label for='password' className='input-label-pass'>Password</label>
              

            </div>

            <div className="input-group">
              <input type="email" className='input-email' placeholder='Email' id="email"  onChange={(event) => handleEmailChange(event)} required></input>
              <label for="email" className='input-label-email' > Email</label>
              
            </div>


          </form>

        </div>
        <div className='btn-sub-reg'>
          <button className="button-submit" data-test-id="submit-button" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>

        <div className=" to-login">
          <p className='already-account'>Have an account already?</p>
          <Link to='/login'> <button className="button-log-register" type="submit" onClick={() => handleLoginButton()}> Login</button></Link>
        </div>

      </div>
    </div>



  );


}


export default Register;
