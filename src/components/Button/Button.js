import React from 'react'
import './button.scss'
import { Link } from 'gatsby'

export default function Button({
  className = '',
  children,
  clickHandler,
  linkTo,
}) {
  return (
    <button
      className={`button title-read-small ${className}`}
      onClick={clickHandler}
    >
      <Link to={linkTo}>{children}</Link>
    </button>
  )
}
