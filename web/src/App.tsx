import React from 'react'
import { AuthProvider } from './contexts/authContext'

import Routes from './routes'

import './assets/styles/global.css'

function App() {
  return (
    <AuthProvider>
        <Routes />
    </AuthProvider>
  )
}

export default App
