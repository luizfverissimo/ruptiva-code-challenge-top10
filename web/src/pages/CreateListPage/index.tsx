import React, { FormEvent, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../../contexts/authContext'

import Header from '../../components/Header'
import Input from '../../components/Input'
import api from '../../services/api'

import './styles.css'


const CreateListPage = () => {
  const [nameList, setNameList] = useState('')
  const [errorNameList, setErrorNameList] = useState('')
  const [listItems, setListItems] = useState([] as string[])
  const [pos1Item, setPos1Item] = useState('')
  const [pos2Item, setPos2Item] = useState('')
  const [pos3Item, setPos3Item] = useState('')
  const [pos4Item, setPos4Item] = useState('')
  const [pos5Item, setPos5Item] = useState('')
  const [pos6Item, setPos6Item] = useState('')
  const [pos7Item, setPos7Item] = useState('')
  const [pos8Item, setPos8Item] = useState('')
  const [pos9Item, setPos9Item] = useState('')
  const [pos10Item, setPos10Item] = useState('')
  
  
  const { user, handleLogout } = useContext(Context)
  const userInfo: any = user

  const history = useHistory()

  //Realiza a validação e submete os dados para serem salvos - somente o nome da lista é obrigatório
  const submitNewTop10 = async (nameList: string, e: FormEvent) => {
    e.preventDefault()
    let isValid = true
    if(nameList === '') {
      setErrorNameList('O nome do Top10 não pode estar vazio')
      isValid = false
    }

    setListItems([...listItems, listItems[0] = pos1Item])
    setListItems([...listItems, listItems[1] =pos2Item])
    setListItems([...listItems, listItems[2] =pos3Item])
    setListItems([...listItems, listItems[3] =pos4Item])
    setListItems([...listItems, listItems[4] =pos5Item])
    setListItems([...listItems, listItems[5] =pos6Item])
    setListItems([...listItems, listItems[6] =pos7Item])
    setListItems([...listItems, listItems[7] =pos8Item])
    setListItems([...listItems, listItems[8] =pos9Item])
    setListItems([...listItems, listItems[9] =pos10Item])

    if(isValid) {
      
      await api.post('/top10s', {
        user_id: userInfo.id,
        title: nameList,
        items: listItems
      })
      alert('TOP10 salvo com sucesso!')
      history.push('/list')
    }
  }

  return (
    <div id='create-list-page'>
      <Header name={userInfo.name} onClick={() => handleLogout()} />
      <div id='create-list-page-content' className='container'>
        <div className='form-container'>
          <h1>Novo TOP10</h1>
          <form action='' className='list-form'>
            <Input
              legend='Nome da lista'
              errorMsg={errorNameList}
              type='text'
              value={nameList}
              onChange={(e) => setNameList(e.target.value)}
            />
            <br />
            <Input
              legend='Posição nº:1'
              type='text'
              value={pos1Item}
              onChange={(e) => setPos1Item(e.target.value)}
            />
            <Input
              legend='Posição nº:2'
              type='text'
              value={pos2Item}
              onChange={(e) => setPos2Item(e.target.value)}
            />
            <Input
              legend='Posição nº3'
              type='text'
              value={pos3Item}
              onChange={(e) => setPos3Item(e.target.value)}
            />
            <Input
              legend='Posição nº4'
              type='text'
              value={pos4Item}
              onChange={(e) => setPos4Item(e.target.value)}
            />
            <Input
              legend='Posição nº5'
              type='text'
              value={pos5Item}
              onChange={(e) => setPos5Item(e.target.value)}
            />
            <Input
              legend='Posição nº6'
              type='text'
              value={pos6Item}
              onChange={(e) => setPos6Item(e.target.value)}
            />
            <Input
              legend='Posição nº7'
              type='text'
              value={pos7Item}
              onChange={(e) => setPos7Item(e.target.value)}
            />
            <Input
              legend='Posição nº8'
              type='text'
              value={pos8Item}
              onChange={(e) => setPos8Item(e.target.value)}
            />
            <Input
              legend='Posição nº9'
              type='text'
              value={pos9Item}
              onChange={(e) => setPos9Item(e.target.value)}
            />
            <Input
              legend='Posição nº10'
              type='text'
              value={pos10Item}
              onChange={(e) => setPos10Item(e.target.value)}
            />
            <div className='button-container-save'>
              <button onClick={(e) => submitNewTop10(nameList, e)}>Salvar TOP10</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateListPage
