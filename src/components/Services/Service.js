import React from "react"
import "./service.scss"
import servLanding from "../../assets/images/service-landing.svg"

const data = [
  {
    title: "Landing",
    content:
      "Pagina de unico proposito; mostrar tus servicios o productos, hacer marketing digital captar alguna informacion de tu audiencia, son algunos de los propositos comunes de este tipo de paginas.",
    urlImage: "../../assets/images/hero.svg",
  },
]
export default function Services() {
  return (
    <div className="service-item grid">
      <h3 className="title">{data[0].title}</h3>
      <p className="content">{data[0].content}</p>
      <img src={servLanding} alt={data[0].title} />
    </div>
  )
}
