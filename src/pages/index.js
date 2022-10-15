import React from "react"
import "../styles/layout.scss"
import "../styles/global.scss"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Service from "../components/Services/Service"

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <main>
        <Hero />
        <section className="services">
          <h2 className="section-title">Algunas ideas para empezar</h2>
          <Service />
        </section>
      </main>
    </div>
  )
}
