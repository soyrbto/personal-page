import React from "react"
import "./form.scss"
import Button from "../Button/Button"

export default function Form() {
  return (
    <form className="subscribe-form grid">
      <div className="field">
        <label htmlFor="name">Nombre</label>
        <input type="text" placeholder="Nombre" id="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Correo</label>
        <input type="text" placeholder="Email" id="email" />
      </div>
      <Button>Subscribete</Button>
    </form>
  )
}
