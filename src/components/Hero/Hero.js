import React from 'react'
import './hero.scss'
import heroImage from '../../assets/images/hero.svg'
import Button from '../Button/Button'

export default function Hero({ className = '', clickHandler }) {
  return (
    <div className={className}>
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
      <div className="contact-box grid sec-grid">
        <Button clickHandler={() => clickHandler()}>Agenda una asesoria</Button>
        <div className="no-commitment notification italic">
          *Sin compromiso, agenda un dia disponible para videollamada y hablemos
          de tu idea.
        </div>
      </div>
      <section className="section-quote">
        <div className="border left" />
        <q className="quote title-display t-center">
          Seguramente ya sabes que quieres, solo falta hacerlo realidad
        </q>
        <div className="border right" />
      </section>
    </div>
  )
}
