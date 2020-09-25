import React from 'react'

import './styles.css'

interface HeaderProps {
  name: string
}

const ListPage: React.FC<HeaderProps> = ({name}) => {
  return (
      <header className='header'>
        <h2>Top10's</h2>
        <div className='left-menu'>
          <p>{name}</p>
          <button>Logout</button>
        </div>
      </header>
  )
}

export default ListPage
