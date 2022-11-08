import React from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import './404.scss'

export default function NotFound() {
  return (
    <div className="not-found grid">
      <Header />
      <img src="images/404.svg" alt="page not found" />
      <Button className="button" linkTo={'/'}>
        No eres tu, soy yo, vuelve a la pagina de inicio
      </Button>
    </div>
  )
}
