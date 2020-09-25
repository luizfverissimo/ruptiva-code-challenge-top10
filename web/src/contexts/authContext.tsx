import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'

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
    const { data } = await api.post('/users', { email, password })

    setUser(data.user)

    localStorage.setItem('userInfo', JSON.stringify(data))
    api.defaults.headers.Authorization = `Bearer ${data.token}`
    setAuthenticated(true)
  }

  const handleLogout = () => {
    setAuthenticated(false)
    localStorage.removeItem('userInfo')
    api.defaults.headers.Authorization = undefined
  }

  return (
    <Context.Provider
      value={{ authenticated, user , loading, handleLogin, handleLogout }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }
