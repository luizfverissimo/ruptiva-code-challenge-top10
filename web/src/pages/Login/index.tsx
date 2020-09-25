import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Login() {
  return (
    <div id='login-page'>
      <div id='login-page-content' className='container'>
        <div className='card'>
          <div className='title'>
            <h1>Top10's</h1>
            <p>Compartilhe seus melhores Top10's</p>
          </div>
          <form action='' className='login-form'>
            <legend>E-mail</legend>
            <input type='text' />

            <legend>Senha</legend>
            <input type='password' />
          </form>
          <div className='button-container'>
            <button type='submit'>Entrar</button>
            <Link to='/register'>Registrar-se</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
