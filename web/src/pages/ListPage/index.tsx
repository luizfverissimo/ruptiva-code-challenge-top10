import React from 'react'

import Header from '../../components/Header'

import './styles.css'

export default function ListPage() {
  return (
    <div id='list-page'>
      <Header name='Luiz Fernando Veríssimo'/>
      <div id='list-page-content' className='container'>
        <div className="button-container">
          <button>Todos Top10's</button>
          <button>Meus Top10's</button>
        </div>
        <div className="list-items-container">
          <ul className="list-items">
            <li>
              <h2>Filmes preferidos</h2>
              <p>Luiz Fernando Veríssimo</p>
            </li>

            <li>
              <h2>Filmes preferidos</h2>
              <p>Luiz Fernando Veríssimo</p>
            </li>

            <li>
              <h2>Filmes preferidos</h2>
              <p>Luiz Fernando Veríssimo</p>
            </li>

            <li>
              <h2>Filmes preferidos</h2>
              <p>Luiz Fernando Veríssimo</p>
            </li>

          </ul>

        </div>
      </div>
    </div>
  )
}
