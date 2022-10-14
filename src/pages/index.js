import React from "react"
import "../styles/layout.scss"
import "../styles/global.scss"
import logo from "../assets/images/logo.svg"
import heroImage from "../assets/images/hero.svg"
import Button from "../components/Button/Button"

export default function Home() {
  return (
    <div className="Home">
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
      <main>
        <section className="hero grid">
          <h1 className="title">
            Diseña.
            <br /> Desarrolla.
            <br /> Proyecta tu idea web.
          </h1>
          <p className="subtitle">
            Objetivamente, ¿que te detiene de empezar ese proyecto que quieres?
          </p>
          <img
            src={heroImage}
            alt="Person thinking in web ideas"
            className="hero-image"
          />
          <div className="contact-box">
            <Button />
            <div className="no-commitment">
              *Sin costo o compromiso, agenda uno de los dias disponibles para
              videollamada y hablemos de tu idea.
            </div>
          </div>
          <div className="border left" />
          <q className="quote">
            Seguramente ya sabes que quieres, solo falta hacerlo realidad
          </q>
          <div className="border right" />
        </section>
      </main>
    </div>
  )
}
