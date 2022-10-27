import React from 'react'
import logo from '../../assets/images/logo.svg'
import menuIcon from '../../assets/images/menu.svg'
import './header.scss'

export default function Header({ className }) {
  return (
    <header className={`header ${className}`} id="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <img src={menuIcon} alt="menu icon" />
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
