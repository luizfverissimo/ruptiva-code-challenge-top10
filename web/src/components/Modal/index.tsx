import React, { useState } from 'react'

import ReactModal from 'react-modal'

import './styles.css'

interface ModalInterface {
  isVisible: boolean
  title: string
  list: string[]
  listId: number
  listUserId: number
  userId: number
  onClickClose: Function
  onClickDelete: Function
}

const Modal: React.FC<ModalInterface> = ({
  isVisible,
  title,
  list,
  onClickClose,
  onClickDelete,
  userId,
  listId,
  listUserId
}) => {
  

  return (
    <ReactModal
      isOpen={isVisible}
      ariaHideApp={false}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
        content: {
          maxHeight: '500px',
          maxWidth: '500px',
          borderRadius: '1.8rem',
          left: '50%',
          marginLeft: '-250px',
          top: '50%',
          marginTop: '-250px',
          background: 'var(--color-grey)',
          border: '0px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'

        }
      }}
    >
      <div className='modal-content'>
        <div className='title-container'>
          <h2>{title}:</h2>
        </div>
        <div className='list-content'>
          {list.map((item, index) => {
            return (
              <li key={index}>
                {index + 1} - {item}
              </li>
            )
          })}
        </div>
        <button type='button' onClick={() => onClickClose()}>
          Fechar
        </button>
        {userId === listUserId ? (
          <button type='button' onClick={() => onClickDelete()}>
            Excluir lista
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </ReactModal>
  )
}

export default Modal
