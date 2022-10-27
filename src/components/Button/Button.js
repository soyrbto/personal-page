import React from 'react'
import './button.scss'

export default function Button({ className = '', children, clickHandler }) {
  return (
    <button
      className={`button title-read-small ${className}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}
