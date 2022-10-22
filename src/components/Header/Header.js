import React from "react"
import logo from "../../assets/images/logo.svg"
import "./header.scss"

export default function Header() {
  return (
    <header className="Header grid" id="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="navbar">
        <ul>
          <a href="#services">
            <li>Mis Servicios</li>
          </a>
          <a href="#contact">
            <li>Contacto</li>
          </a>
        </ul>
      </nav>
    </header>
  )
}
