import React, { createContext, useState, useEffect } from 'react'

import api from '../services/api'
import history from '../services/history'

export interface AuthContextInterface {
  authenticated: boolean
  user: {}
  loading: boolean
  handleLogin: Function
  handleLogout: Function
}

interface ResponseUserInterface extends Object {
  token: string
  user: Object
}

const Context = createContext<AuthContextInterface>({} as AuthContextInterface)

const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const userInfoFromLocalStorage = localStorage.getItem('userInfo')
    if (userInfoFromLocalStorage) {
      const userInfo: ResponseUserInterface = JSON.parse(
        userInfoFromLocalStorage
      )
      const token: string = userInfo.token

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`
        setAuthenticated(true)
      }
    }

    setLoading(false)
  }, [])

  const handleLogin = async (email: string, password: string) => {
    try{
      const { data } = await api.post('/users', { email, password })
      console.log(data)
      setUser(data.user)
  
      localStorage.setItem('userInfo', JSON.stringify(data))
      api.defaults.headers.Authorization = `Bearer ${data.token}`
      setAuthenticated(true)
      history.push('/list')
    } catch (err) {
      setAuthenticated(false)
      alert('E-mail ou senha inválido')
    }
  }

  const handleLogout = () => {
    setAuthenticated(false)
    localStorage.removeItem('userInfo')
    api.defaults.headers.Authorization = undefined
  }

  if(loading){
    return <h1>Carregando...</h1>
  }

  return (
    <Context.Provider
      value={{ authenticated, user, loading, handleLogin, handleLogout }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }
