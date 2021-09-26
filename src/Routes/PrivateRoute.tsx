import { Route, Redirect } from 'react-router-dom'
import { ReactNode } from 'react'

interface IProps {
  authenticated: boolean
  path: string
  children: ReactNode
  exact?: boolean
}

const PrivateRoute = ({ authenticated, path, exact = false, children }: IProps) => {
  return (
    <Route exact={exact} path={path}>
      {authenticated ? children : <Redirect to="/login" />}
    </Route>
  )
}

export default PrivateRoute
