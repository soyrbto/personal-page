import React from "react"
import "../styles/layout.scss"
import "../styles/global.scss"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Service from "../components/Services/Service"
import Button from "../components/Button/Button"
import Form from "../components/Form/Form"

const services = [
  {
    title: "Landing",
    content:
      "Pagina de unico proposito; mostrar tus servicios o productos, hacer marketing digital captar alguna informacion de tu audiencia, son algunos de los propositos comunes de este tipo de paginas.",
    urlImage: "./images/service-landing.svg",
  },
  {
    title: "Blogs",
    content:
      "Para creadores de contenido o aquellos que quieren hacer marketing optimizando su pagina para buscadores, no hay mejor forma de conectar con tu audiencia que dandoles contenido de valor e interes para ellos.",
    urlImage: "./images/service-blog.svg",
  },
  {
    title: "Menu",
    content:
      "Con el auge de la tecnologia es comun encontrar ahora todo tipo de menus, volantes o pequeñas páginas con contenido puntual, facil de actualizar y ecologico al ahorrar desperdicios en papel",
    urlImage: "./images/service-menu.svg",
  },
  {
    title: "Link page",
    content:
      "Especialmente en instagram  que solo pondemos usar un unico sitio web necesitamos una pagina de links para redireccionar a nuestra audiencia a nuestros diversos contenidos/productos/servicios. ",
    urlImage: "./images/service-linkpage.svg",
  },
]

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <main>
        <Hero />
        <section className="services" id="services">
          <h2 className="section-title">Algunas ideas para empezar</h2>
          {services.map(service => {
            return <Service services={service} key={service.title} />
          })}
        </section>
        <section className="section-contact grid" id="contact">
          <img src="./images/profile.png" alt="Soy Roberto" />
          <p className="section-content">
            Estoy a un click de distancia, aunque tambien puedes contactarme por
            instagram
          </p>
          <div className="button">
            <Button>Agenda un asesoria</Button>
          </div>
        </section>
        <section className="section-subscribe grid">
          <h2>
            Suscribete <br />
            (promociones y novedades)
          </h2>
          <Form></Form>
        </section>

      </main>
    </div>
  )
}
