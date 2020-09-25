import React, { FormEvent, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/Input'
import { Context } from '../../contexts/authContext'

import './styles.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const { handleLogin } = useContext(Context)

  const history = useHistory()

  const submitLogin = async (email: string, password: string, e: FormEvent) => {
    let isValid = true

    if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)) {
      setErrorEmail('Digite um e-mail válido')
      isValid = false
    } else {
      setErrorEmail('')
      isValid = true
    }

    if (password.length < 1) {
      setErrorPassword('A senha deve ter no mínimo 8 caracteres')
      isValid = false
    } else {
      setErrorPassword('')
      isValid = true
    }

    if (isValid) {
      e.preventDefault()

      try {
        handleLogin(email, password)
        history.push('/list')
      } catch (err) {
        alert('E-mail ou senha inválido.')
      }
    }
  }

  return (
    <div id='login-page'>
      <div id='login-page-content' className='container'>
        <div className='card'>
          <div className='title'>
            <h1>Top10's</h1>
            <p>Compartilhe seus melhores Top10's</p>
          </div>
          <form action='' className='login-form'>
            <Input
              legend='E-mail'
              errorMsg={errorEmail}
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              legend='Senha'
              errorMsg={errorPassword}
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div className='button-container'>
            <button
              type='submit'
              onClick={(e) => submitLogin(email, password, e)}
            >
              Entrar
            </button>
            <Link to='/register'>Registrar-se</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
