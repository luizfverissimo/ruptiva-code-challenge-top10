import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../../contexts/authContext'

import Header from '../../components/Header'
import Modal from '../../components/Modal'

import './styles.css'
import api from '../../services/api'

interface ListItemInterface {
  id: number
  title: string
  items: string
  name: string
  user_id: number
}

export default function ListPage() {
  const [list, setList] = useState([])

  //modal states
  const [visible, setVisible] = useState(false)
  const [listToRender, setListToRender] = useState([] as string[])
  const [listId, setListId] = useState(0)
  const [titleToRender, setTitleToRender] = useState('')
  const [listUserId, setListUserId] = useState(0)

  const { handleLogout, loading } = useContext(Context)
  const userInfo: any = JSON.parse(localStorage.getItem('userInfo') as string)

  const history = useHistory()

  const logout = () => {
    handleLogout()
    history.push('/')
  }

  const loadAllLists = async () => {
    const { data } = await api.get('/top10s')
    if (data) {
      setList(data)
    }
    console.log(data)
  }

  const loadUserLists = async (userId: number) => {
    const { data } = await api.get(`/top10s/${userId}`)
    if (data) {
      setList(data)
    }
  }

  const showModal = (
    list: string,
    title: string,
    listUserId: number,
    listId: number
  ) => {
    const listArray = JSON.parse(list)
    setListId(listId)
    setListToRender(listArray)
    setTitleToRender(title)
    setListUserId(listUserId)
    setVisible(true)
  }

  const handleDeleteList = async (listId: number) => {
    try {
      await api.delete(`/top10s/${listId}`)
      alert('Top10 excluído.')
      setVisible(false)
      loadAllLists()
    } catch (err) {
      alert('Um erro ocorreu.')
    }
  }

  useEffect(() => {
    loadAllLists()
  }, [])

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Modal
        isVisible={visible}
        title={titleToRender}
        onClickClose={() => setVisible(false)}
        list={listToRender}
        listId={listId}
        listUserId={listUserId}
        userId={userInfo.user.id}
        onClickDelete={() => handleDeleteList(listId)}
      />
      <div id='list-page'>
        <Header name={userInfo.user.name} onClick={logout} />
        <div id='list-page-content' className='container'>
          <div className='new-list-item'>
            <Link to='/create-list'>
              <p>+ Adicionar um novo TOP10</p>
            </Link>
          </div>
          <div className='button-container'>
            <button type='button' onClick={loadAllLists}>
              Todos Top10's
            </button>
            <button
              type='button'
              onClick={() => loadUserLists(userInfo.user.id)}
            >
              Meus Top10's
            </button>
          </div>

          <div className='list-items-container'>
            <ul className='list-items'>
              {list.map((item: ListItemInterface) => {
                return (
                  <button
                    key={item.id}
                    type='button'
                    onClick={() =>
                      showModal(item.items, item.title, item.user_id, item.id)
                    }
                  >
                    <h2>{item.title}</h2>
                    <p>{item.name}</p>
                  </button>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
