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

  //Realiza o tratamento (lowerCase) e validação do email, valida a senha e submete para ser registrado.
  const submitRegister = async (name: string, email: string, password: string, e: FormEvent) => {
    const emailLowercase = email.toLowerCase()
    let isValid: Array<boolean> = [false, false, false]
    if (name === '') {
      setErrorName('O nome não pode estar vazio')
      isValid[0] = false
    } else {
      setErrorName('')
      isValid[0] = true
    }

    if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(emailLowercase)) {
      setErrorEmail('Digite um e-mail válido')
      isValid[1] = false
    } else {      
      setEmail(emailLowercase)
      setErrorEmail('')
      isValid[1] = true
    }

    if (password.length < 8) {
      setErrorPassword('A senha deve ter no mínimo 8 caracteres')
      isValid[2] = false
    } else {
      setErrorPassword('')
      isValid[2] = true
    }

    if (!isValid.includes(false)) {
      e.preventDefault()

      try {
        await api.post('/users/register', {
            name,
            email: emailLowercase,
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
