import React from "react"
import "./service.scss"

export default function Services({ services }) {
  return (
    <div className="service-item grid">
      <h3 className="title">{services.title}</h3>
      <p className="content">{services.content}</p>
      <img src={services.urlImage} alt={services.title} />
    </div>
  )
}
