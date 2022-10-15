import React from "react"
import "./form.scss"
import Button from "../Button/Button"

export default function Form() {
  return (
    <form className="subscribe-form">
      <label>Nombre</label>
      <input type="text" placeholder="Nombre" aria-label="name" />
      <label>Correo</label>
      <input type="text" placeholder="Email" aria-label="email" />
      <Button className="button">Subscribete</Button>
    </form>
  )
}
