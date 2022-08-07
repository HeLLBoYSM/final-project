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
              <label for="username" className='input-label-user' >Username</label>
              <input type="text" className="input" id="user" required onChange={(event) => handleUsernameChange(event)}></input>
            </div>

            <div className="input-group">
              <label for='password' className='input-label-pass'>Password</label>
              <input type="password" id="pass" required onChange={(event) => handlePasswordChange(event)}></input>

            </div>

            <div className="input-group">
              <label for="email" className='input-label-email' > Email</label>
              <input type="email" id="email" required onChange={(event) => handleEmailChange(event)}></input>
            </div>


          </form>

        </div>
        <div>
          <button className="button-submit" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
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
