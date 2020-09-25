import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ListPage from './pages/ListPage'
import Login from './pages/Login'
import Register from './pages/Register'

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/list' component={ListPage} />
    </BrowserRouter>
  )
}

export default Routes
