import { getAuth, signOut } from 'firebase/auth'
import { useSelector, useDispatch } from 'react-redux'
import { UpdateAnonymousLogin } from 'Redux/Actions/UpdateAnonymousLogin'
import ApplicationState from 'Types/ApplicationState'
import './stickyHeader.scss'

const StickyHeader = () => {
  const dispatch = useDispatch()
  const anonymousLogin = useSelector<ApplicationState, boolean>(state => state.anonymousLogin)
  const auth = getAuth()
  const currentUser = auth.currentUser

  const logoutClickHandler = async () => {
    await signOut(auth)
  }
  const loginClickHandler = () => {
    dispatch(UpdateAnonymousLogin(false))
  }

  //TODO add languages support
  return (
    <div className="sticky-header">
      <div className="sticky-header__content">
        <span>{currentUser ? currentUser.displayName : anonymousLogin ? 'Guest' : 'Unknown'}</span>
        {currentUser ? <button onClick={logoutClickHandler}>Logout</button> : <button onClick={loginClickHandler}>Login</button>}
      </div>
      <div className="sticky-header__line"></div>
    </div>
  )
}
export default StickyHeader
