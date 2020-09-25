import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../../contexts/authContext'

import Header from '../../components/Header'

import './styles.css'
import api from '../../services/api'

interface ListItemInterface {
  id: number
  title: string
  items: string
  name: string
}

export default function ListPage() {
  const [list, setList] = useState([])
  const { user, handleLogout, loading } = useContext(Context)
  const userInfo: any = user

  const history = useHistory()

  useEffect(() => {
    const apiRequestList = async () => {
      const { data } = await api.get('/top10s')
      if (data) {
        setList(data)
      }
    }

    apiRequestList()
  }, [])

  const logout = () => {
    handleLogout()
    history.push('/')
  }

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <div id='list-page'>
      <Header name={userInfo.name} onClick={logout} />
      <div id='list-page-content' className='container'>
        <div className='new-list-item'>
          <Link to='/create-list'>
            <p>+ Adicionar um novo TOP10</p>
          </Link>
        </div>
        <div className='button-container'>
          <button>Todos Top10's</button>
          <button>Meus Top10's</button>
        </div>

        <div className='list-items-container'>
          <ul className='list-items'>
            {list.map((item: ListItemInterface) => {
              return (
                <button key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.name}</p>
                </button>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
