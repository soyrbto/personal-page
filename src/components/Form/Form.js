import React from "react"
import "./form.scss"
import Button from "../Button/Button"

export default function Form() {
  return (
    <form className="subscribe-form">
      <label htmlFor="name">Nombre</label>
      <input type="text" placeholder="Nombre" id="name" />
      <label htmlFor="email">Correo</label>
      <input type="text" placeholder="Email" id="email" />
      <Button className="button">Subscribete</Button>
    </form>
  )
}
