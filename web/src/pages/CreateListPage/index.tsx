import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../../contexts/authContext'

import Header from '../../components/Header'
import Input from '../../components/Input'

import './styles.css'

const CreateListPage = () => {
  const { user, handleLogout } = useContext(Context)
  const userInfo: any = user

  const history = useHistory()

  const logout = () => {
    handleLogout()
    history.push('/')
  }

  return (
    <div id='create-list-page'>
      <Header name={userInfo.name} onClick={logout} />
      <div id='create-list-page-content' className='container'>
        <div className='form-container'>
          <h1>Novo TOP10</h1>
          <form action='' className='list-form'>
            <Input
              legend='Nome da lista'
              errorMsg={'error'}
              type='text'
              value={'nome da lista'}
              onChange={(e) => {}}
            />
            <br />
            <Input
              legend='Posição nº:1'
              errorMsg={'error'}
              type='text'
              value={'nome da lista'}
              onChange={(e) => {}}
            />
            <Input
              legend='Posição nº:2'
              errorMsg={'error'}
              type='text'
              value={'nome da lista'}
              onChange={(e) => {}}
            />
            <Input
              legend='Posição nº3'
              errorMsg={'error'}
              type='text'
              value={'nome da lista'}
              onChange={(e) => {}}
            />
            <Input
              legend='Posição nº4'
              errorMsg={'error'}
              type='text'
              value={'nome da lista'}
              onChange={(e) => {}}
            />
            <Input
              legend='Posição nº5'
              errorMsg={'error'}
              type='text'
              value={'nome da lista'}
              onChange={(e) => {}}
            />
            <Input
              legend='Posição nº6'
              errorMsg={'error'}
              type='text'
              value={'nome da lista'}
              onChange={(e) => {}}
            />
            <Input
              legend='Posição nº7'
              errorMsg={'error'}
              type='text'
              value={'nome da lista'}
              onChange={(e) => {}}
            />
            <Input
              legend='Posição nº8'
              errorMsg={'error'}
              type='text'
              value={'nome da lista'}
              onChange={(e) => {}}
            />
            <Input
              legend='Posição nº9'
              errorMsg={'error'}
              type='text'
              value={'nome da lista'}
              onChange={(e) => {}}
            />
            <Input
              legend='Posição nº10'
              errorMsg={'error'}
              type='text'
              value={'nome da lista'}
              onChange={(e) => {}}
            />
            <div className='button-container'>
              <button>Salvar TOP10</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateListPage
