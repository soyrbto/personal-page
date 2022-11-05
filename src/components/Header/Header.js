import React from 'react'
import logo from '../../assets/images/logo.svg'
import './header.scss'
import BurguerButton from '../BurguerButton/BurguerButton'

export default function Header({ className, handleNavbar }) {
  return (
    <header className={`header ${className}`} id="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <BurguerButton handleClick={handleNavbar} />
      <nav className="navbar">
        <ul>
          <a href="#services">
            <li>Servicios</li>
          </a>
          <a href="#contact">
            <li>Contacto</li>
          </a>
        </ul>
      </nav>
    </header>
  )
}
