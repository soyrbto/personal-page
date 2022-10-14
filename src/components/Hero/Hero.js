import React from "react"
import "./hero.scss"
import heroImage from "../../assets/images/hero.svg"
import Button from "../Button/Button"

export default function Hero() {
  return (
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
      <section className="section-quote">
        <div className="border left" />
        <q className="quote">
          Seguramente ya sabes que quieres, solo falta hacerlo realidad
        </q>
        <div className="border right" />
      </section>
    </section>
  )
}
