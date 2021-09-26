import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import Main from 'Pages/Main/Main'
import Login from 'Pages/Login/Login'
import ResetPassword from 'Pages/ResetPassword/ResetPassword'
import Preview from 'Pages/Preview/Preview'
import NotFound from 'Pages/NotFound/NotFound'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import ApplicationState from 'Types/ApplicationState'

enum AuthState {
  loading,
  authenticated,
  notAuthenticated
}

const Routes = () => {
  const [authState, setAuthState] = useState<AuthState>(AuthState.loading)
  const anonymousLogin = useSelector<ApplicationState, boolean>(state => state.anonymousLogin)
  const authenticated = authState === AuthState.authenticated

  useEffect(() => {
    if (anonymousLogin) {
      setAuthState(AuthState.authenticated)
    } else {
      onAuthStateChanged(getAuth(), user => {
        if (user) {
          setAuthState(AuthState.authenticated)
        } else {
          setAuthState(AuthState.notAuthenticated)
        }
      })
    }
  }, [anonymousLogin])

  return authState === AuthState.loading ? (
    <p>is loading ...</p>
  ) : (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact={true} path="/" authenticated={authenticated}>
          <Main />
        </PrivateRoute>

        <PrivateRoute path="/pwdreset" authenticated={authenticated}>
          <ResetPassword />
        </PrivateRoute>

        <PrivateRoute path="/preview" authenticated={authenticated}>
          <Preview />
        </PrivateRoute>

        <Route path="/login">{authenticated ? <Redirect to="/" /> : <Login />}</Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
