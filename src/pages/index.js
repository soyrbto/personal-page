import '../styles/main.scss'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Service from '../components/Services/Service'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'
import Schedule from '../components/Schedule/Schedule'
import { Seo } from '../components/Seo'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const services = [
  {
    title: 'Landing Page',
    content:
      'Pagina de unico proposito. Mostrar tus servicios o productos, hacer marketing digital, captar informacion de tu audiencia. Son algunos de los propositos de este tipo de paginas.',
    urlImage: './images/service-landing.svg',
  },

  {
    title: 'Tienda Online Express',
    content:
      'Perfecto compañero para tu tienda en crecimiento. Automatiza el proceso de creación de orden, facilita la gestión del inventario y muestra un catálogo detallado a tus clientes.',
    urlImage: './images/service-linkpage.svg',
  },
]

export default function Home({ data }) {
  const [navbarState, setNavbarState] = useState(false)

  const handleScroll = e => {
    console.log('holis')
  }

  return (
    <div
      className={`Home  ${
        navbarState ? 'navbar-overlay open' : 'navbar-overlay close'
      }`}
      onScroll={e => handleScroll}
    >
      <Header
        className={'grid'}
        handleNavbar={() => setNavbarState(!navbarState)}
      />
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
            imgClassName="image"
            alt="profile image"
          />
          <div className="schedule">
            <h4 className="info">
              Estoy a un click de distancia, aunque tambien puedes contactarme
              por instagram
            </h4>

            <Schedule />
          </div>
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
