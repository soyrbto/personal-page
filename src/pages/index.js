import '../styles/main.scss'
import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Service from '../components/Services/Service'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const services = [
  {
    title: 'Landing',
    content:
      'Pagina de unico proposito. Mostrar tus servicios o productos, hacer marketing digital, captar informacion de tu audiencia. Son algunos de los propositos de este tipo de paginas.',
    urlImage: './images/service-landing.svg',
  },
  {
    title: 'Blogs',
    content:
      'Para creadores de contenido o aquellos que quieren hacer marketing optimizando su pagina para buscadores, no hay mejor forma de conectar con tu audiencia que dandoles contenido de valor e interes para ellos.',
    urlImage: './images/service-blog.svg',
  },
  {
    title: 'Menu',
    content:
      'Con el auge de la tecnologia es comun encontrar ahora todo tipo de menus, volantes o pequeñas páginas con contenido puntual, facil de actualizar y ecologico al ahorrar desperdicios en papel',
    urlImage: './images/service-menu.svg',
  },
  {
    title: 'Link page',
    content:
      'Especialmente para instagram, un unico sitio web donde puedes listar links para redireccionar a tu audiencia hacia contenidos/productos/servicios.',
    urlImage: './images/service-linkpage.svg',
  },
]

export default function Home({ data }) {
  return (
    <div className="Home">
      <Header className={'grid'} />
      <main>
        <section>
          <Hero className="hero grid" />
        </section>
        <section className="section-services grid" id="services">
          <h2 className="section-title title-display">
            Algunas ideas para empezar
          </h2>
          {services.map(service => {
            return <Service services={service} key={service.title} />
          })}
        </section>
        <section className="section-contact grid" id="contact">
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            as="div"
            className="profile-image"
            alt="profile image"
          />
          <p className="title-display info">
            Estoy a un click de distancia, aunque tambien puedes contactarme por
            instagram
          </p>
          <Button>Agenda un asesoria</Button>
        </section>
        <section className="section-subscribe grid">
          <Form />
        </section>
        <section className="go-top grid">
          <a href="#header">
            <div className="go-top-icon" />
          </a>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
  }
`

export const Head = () => <Seo />
