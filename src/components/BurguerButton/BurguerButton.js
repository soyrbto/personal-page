import React from 'react'
import './burguerButton.scss'

export default function BurguerButton({ handleClick }) {
  return (
    <label htmlFor="check">
      <input type="checkbox" id="check" onClick={handleClick} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  )
}
