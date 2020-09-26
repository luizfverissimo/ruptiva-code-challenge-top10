import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  legend: string
  errorMsg?: string
}

const Input: React.FC<InputProps> = ({ legend, value, errorMsg, ...rest }) => {
  return (
    <div className='input-container'>
      <legend>{legend}</legend>
      <input {...rest} />
      <p>{errorMsg}</p>
    </div>
  )
}

export default Input
