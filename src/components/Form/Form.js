import './form.scss'
import React, { useState } from 'react'
import Button from '../Button/Button'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function Form() {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(emailValue, { FNAME: nameValue }).then(
      data => {
        console.log(nameValue, emailValue, data)
      }
    )
    setEmailValue('')
    setNameValue('')
  }

  return (
    <form
      className="subscribe-form grid full-bleed"
      onSubmit={handleSubmit}
    >
      <h2 className="title-display section-title">
        Suscribete para promociones y novedades
      </h2>
      <div className="field">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          id="name"
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="email" value={emailValue}>
          Correo
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
        />
      </div>
      <Button>Subscribete</Button>
    </form>
  )
}
