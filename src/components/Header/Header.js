import React from "react"
import logo from "../../assets/images/logo.svg"
import "./header.scss"

export default function Header() {
  return (
    <header className="header grid">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li>Conóceme</li>
          <li>Mis Servicios</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  )
}
