import React, { FormEvent, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import { Context } from '../../contexts/authContext'

import './styles.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const { handleLogin } = useContext(Context)

  //Realiza a validação da email e se uma senha foi adicionada
  const submitLogin = async (email: string, password: string, e: FormEvent) => {
    const emailLowercase = email.toLowerCase()
    let isValid: Array<boolean> = [false, false]

    if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(emailLowercase)) {
      setErrorEmail('Digite um e-mail válido')
      isValid[0] = false
    } else {
      setErrorEmail('')
      isValid[0] = true
    }

    if (password.length === 0) {
      setErrorPassword('Você deve adicionar uma senha')
      isValid[1] = false
    } else {
      setErrorPassword('')
      isValid[1] = true
    }

    if (!isValid.includes(false)) {
      e.preventDefault()
      handleLogin(emailLowercase, password)
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
