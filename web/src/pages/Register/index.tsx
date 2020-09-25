import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const submitRegister = (name: string, email: string, password: string) => {
    let isValid = true
    if (name === '') {
      setErrorName('O nome não pode estar vazio')
      isValid = false
    } else {
      setErrorName('')
      isValid = true
    }

    if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)) {
      setErrorEmail('Digite um e-mail válido')
      isValid = false
    } else {
      setErrorEmail('')
      isValid = true
    }

    if (password.length < 8) {
      setErrorPassword('A senha deve ter no mínimo 8 caracteres')
      isValid = false
    } else {
      setErrorPassword('')
      isValid = true
    }

    console.log(isValid)
  }

  return (
    <div id='login-page'>
      <div id='login-page-content' className='container'>
        <div className='card'>
          <div className='title'>
            <h1>Registrar-se</h1>
          </div>
          <form action='' className='login-form'>
            <legend>Nome ou usuário</legend>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>{errorName}</p>

            <legend>E-mail</legend>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{errorEmail}</p>

            <legend>Senha</legend>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{errorPassword}</p>
          </form>
          <div className='error-container'></div>
          <div className='button-container'>
            <button
              type='button'
              onClick={() => submitRegister(name, email, password)}
            >
              Registrar-se
            </button>
            <Link to='/'>Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
