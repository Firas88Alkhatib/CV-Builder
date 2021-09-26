import { useState } from 'react'
import './login.scss'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const Login = () => {
  const [isRegister, setIsRegister] = useState(false)

  const registerOnClickHandler = () => {
    setIsRegister(true)
  }
  const signInOnClickHandler = () => {
    setIsRegister(false)
  }

  return (
    <div className={`login ${isRegister ? 'on-register' : 'on-signin'}`}>
      <div className="login-container">
        <div>
          <span>Already Have An Account ?</span>
          <button onClick={signInOnClickHandler}>Sign in</button>
        </div>
        <div>
          <span>Don't Have An Account ?</span>
          <button onClick={registerOnClickHandler}>Register</button>
        </div>
        <div className="login-form-container">
          <LoginForm isActive={!isRegister} />
          <RegisterForm isActive={isRegister} />
        </div>
      </div>
    </div>
  )
}

export default Login
