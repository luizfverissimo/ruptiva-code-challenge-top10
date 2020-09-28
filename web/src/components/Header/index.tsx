import React, { ButtonHTMLAttributes } from 'react'

import './styles.css'

interface HeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
}

const ListPage: React.FC<HeaderProps> = ({ name, ...rest }) => {
  return (
    <header className='header'>
      <div className='header-content'>
        <h2>Top10's</h2>
        <div className='left-menu'>
          <p>{name}</p>
          <button type='button' {...rest}>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default ListPage
