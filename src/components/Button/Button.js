import React from 'react'
import './button.scss'

export default function Button({ className = '', children }) {
  return (
    <button className={`button title-read-small ${className}`}>
      {children}
    </button>
  )
}
