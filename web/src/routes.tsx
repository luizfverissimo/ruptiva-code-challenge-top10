import React, { useContext } from 'react'
import { BrowserRouter, Route, Redirect, RouteProps } from 'react-router-dom'
import { Context } from './contexts/authContext'

import ListPage from './pages/ListPage'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateListPage from './pages/CreateListPage'

interface CustomRouteInterface extends RouteProps{
  isPrivate?: boolean
}

const CustomRoute: React.FC<CustomRouteInterface> = ({
  isPrivate,
  ...rest
}) => {
  const { authenticated } = useContext(Context)

  if (isPrivate && !authenticated) {
    return <Redirect to='/' />
  }

  return <Route {...rest} />
}

function Routes() {
  return (
    <BrowserRouter>
      <CustomRoute exact path='/' component={Login} />
      <CustomRoute path='/register' component={Register} />
      <CustomRoute /* isPrivate */ path='/list' component={ListPage} />
      <CustomRoute /* isPrivate */ path='/create-list' component={CreateListPage} />
    </BrowserRouter>
  )
}

export default Routes
