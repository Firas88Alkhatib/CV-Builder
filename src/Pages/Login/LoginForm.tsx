import { Validator } from 'Helpers/Util'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth'
import { UpdateAnonymousLogin } from 'Redux/Actions/UpdateAnonymousLogin'

// event target can be accessed via currentTarget property but that will return any
type signinOnSubmitEvent = React.FormEvent<HTMLFormElement> & {
  target: {
    email: HTMLInputElement
    password: HTMLInputElement
    submit: HTMLButtonElement
  }
}

interface IProps {
  isActive: boolean
}
const LoginForm = ({ isActive }: IProps) => {
  const dispatch = useDispatch()
  const auth = getAuth()
  const history = useHistory()
  const [signinFormErrors, setSigninFormErrors] = useState<string[]>([])
  const signinOnSubmitHandler = async (event: signinOnSubmitEvent) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    const submitButton = event.target.submit
    const validatedEmail = new Validator(email, 'E-mail Address').isNotEmpty(true).noSpacesStartEnd(true).end()
    const validatedPassword = new Validator(password, 'Password').isNotEmpty(true).noSpacesStartEnd(true).end()
    if (!validatedEmail.isValid || !validatedPassword.isValid) {
      setSigninFormErrors([...validatedEmail.errors, ...validatedPassword.errors])
      return
    }
    try {
      submitButton.disabled = true
      await signInWithEmailAndPassword(auth, email, password)
      history.push('/')
    } catch (error: any) {
      submitButton.disabled = false
      switch (error.code) {
        case AuthErrorCodes.INVALID_EMAIL:
          setSigninFormErrors(['Invalid Email'])
          break
        case AuthErrorCodes.INVALID_PASSWORD:
        case AuthErrorCodes.USER_DELETED:
          setSigninFormErrors(['Wrong email or password'])
          break
        case AuthErrorCodes.USER_DISABLED:
          setSigninFormErrors(['Your account is disabled'])
          break
        case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
          setSigninFormErrors(['Too many attempts, try later!'])
          break
        default:
          setSigninFormErrors(['Unknown Error!.'])
          break
      }
    }
  }
  const guestLoginHandler = async () => {
    dispatch(UpdateAnonymousLogin(true))
  }

  return (
    <form className={`signin-form ${isActive ? 'active' : 'inactive'}`} onSubmit={signinOnSubmitHandler}>
      <h3>Sign In</h3>
      {signinFormErrors.length > 0 && (
        <div className="login-form_errors">
          {signinFormErrors.map(error => (
            <span key={error}>{error}</span>
          ))}
        </div>
      )}
      <input type="text" name="email" placeholder="E-mail Address" />
      <input type="password" name="password" placeholder="Password" />
      <div className="signin-form__buttons">
        <button type="button" onClick={guestLoginHandler}>
          Guest login
        </button>
        <button name="submit" type="submit">
          Login
        </button>
      </div>
      <Link to="/pwdreset">Forgot Password ?</Link>
    </form>
  )
}
export default LoginForm
