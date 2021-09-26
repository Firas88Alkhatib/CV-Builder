import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, AuthErrorCodes } from 'firebase/auth'
import { useHistory } from 'react-router-dom'
import { Validator } from 'Helpers/Util'
import { useState } from 'react'

// event target can be accessed via currentTarget property to get the correct typing
type RegisterOnSubmitEvent = React.FormEvent<HTMLFormElement> & {
  target: {
    username: HTMLInputElement
    email: HTMLInputElement
    confirmPassword: HTMLInputElement
    password: HTMLInputElement
    submit: HTMLButtonElement
  }
}

interface IProps {
  isActive: boolean
}

const RegisterForm = ({ isActive }: IProps) => {
  const auth = getAuth()
  const [registerFormErrors, setRegisterFormErrors] = useState<string[]>([])
  const history = useHistory()
  const registerOnSubmitHandler = async (event: RegisterOnSubmitEvent) => {
    event.preventDefault()
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    const confirmPassword = event.target.confirmPassword.value
    const submitButton = event.target.submit
    const validatedUsername = new Validator(username, 'Username').isNotEmpty(true).noSpacesStartEnd(true).isLengthAtLeast(3).end()
    const validatedEmail = new Validator(email, 'E-mail Address').isEmail().end()
    const validatedPassword = new Validator(password, 'Password')
      .isNotEmpty(true)
      .isMatch(confirmPassword, 'Confirm password', true)
      .noSpacesStartEnd(true)
      .hasDigits()
      .hasLowercaseChars()
      .hasUppercaseChars()
      .isLengthAtLeast(6)
      .end()
    if (!validatedUsername.isValid || !validatedEmail.isValid || !validatedPassword.isValid) {
      setRegisterFormErrors([...validatedUsername.errors, ...validatedEmail.errors, ...validatedPassword.errors])
      return
    }
    try {
      submitButton.disabled = true
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      setRegisterFormErrors([])
      await updateProfile(userCredential.user, { displayName: username })
      await sendEmailVerification(userCredential.user)
      // TODO  show email verification component when succeeded
      // instead of navigating to main
      history.push('/')
    } catch (error: any) {
      submitButton.disabled = false
      switch (error.code) {
        case AuthErrorCodes.INVALID_EMAIL:
          setRegisterFormErrors(['Invalid Email Address.'])
          break
        case AuthErrorCodes.EMAIL_EXISTS:
          setRegisterFormErrors(['Email Address Already in use.'])
          break
        case AuthErrorCodes.WEAK_PASSWORD:
          setRegisterFormErrors(['Your password is too weak.'])
          break
        case AuthErrorCodes.OPERATION_NOT_ALLOWED:
          setRegisterFormErrors(['Registration is disabled for the moment!.'])
          break
        default:
          setRegisterFormErrors(['Unknown Error!.'])
          break
      }
    }
  }
  return (
    <form className={`register-form ${isActive ? 'active' : 'inactive'}`} onSubmit={registerOnSubmitHandler}>
      <h3>Register</h3>
      {registerFormErrors.length > 0 && (
        <div className="login-form_errors">
          {registerFormErrors.map(error => (
            <span key={error}>{error}</span>
          ))}
        </div>
      )}
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="E-mail Address" />
      <input type="password" name="password" placeholder="Password" />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" />
      <button name="submit" type="submit">
        Register
      </button>
    </form>
  )
}
export default RegisterForm
