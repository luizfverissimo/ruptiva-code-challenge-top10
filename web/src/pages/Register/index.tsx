import React, { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Input from '../../components/Input'
import api from '../../services/api'

import './styles.css'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const history = useHistory()

  const submitRegister = async (name: string, email: string, password: string, e: FormEvent) => {
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

    if (isValid) {
      e.preventDefault()

      try {
        await api.post('/users/register', {
            name,
            email,
            password
        })

        alert('Cadastro feito com sucesso')
        history.push('/')

      } catch (err) {
        alert('Email já cadastrado ou erro na realização do cadastro')
      }
    }
  }

  return (
    <div id='login-page'>
      <div id='login-page-content' className='container'>
        <div className='card'>
          <div className='title'>
            <h1>Registrar-se</h1>
          </div>
          <form action='' className='login-form'>
            <Input
              legend='Nome ou usuário'
              errorMsg={errorName}
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
          <div className='error-container'></div>
          <div className='button-container'>
            <button
              type='button'
              onClick={(e) => submitRegister(name, email, password, e)}
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
