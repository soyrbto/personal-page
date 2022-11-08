import './form.scss'
import React, { useState } from 'react'
import Button from '../Button/Button'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function Form() {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [sucessState, setSuccessState] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(emailValue, { FNAME: nameValue }).then(data => {
      setSuccessState(true)
      setEmailValue('')
      setNameValue('')
      setInterval(() => {
        setSuccessState(false)
      }, 3000)
    })
  }

  const staticContent = [
    {
      labelfor: 'name',
      labelText: 'nombre',
      value: nameValue,
      setter: setValue => setNameValue(setValue),
    },
    {
      labelfor: 'email',
      labelText: 'email',
      value: emailValue,
      setter: setValue => setEmailValue(setValue),
    },
  ]

  const formInputs = (
    <>
      <h2 className="title-display section-title">
        Suscribete para promociones y novedades
      </h2>
      {staticContent.map((sc, i) => {
        return (
          <div className="field" key={i}>
            <label htmlFor={sc.labelfor}>{sc.labelText}</label>
            <input
              type="text"
              placeholder={sc.labelfor}
              id={sc.labelfor}
              value={sc.value}
              onChange={e => sc.setter(e.target.value)}
            />
          </div>
        )
      })}
      <Button className>Subscribete</Button>
    </>
  )

  const successMessage = (
    <h2 className="title-display section-title">
      Te haz suscrito exitosamente
    </h2>
  )

  return (
    <form className="subscribe-form grid full-bleed" onSubmit={handleSubmit}>
      {sucessState ? successMessage : formInputs}
    </form>
  )
}
