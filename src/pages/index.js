import React from "react"
import "../styles/layout.scss"
import "../styles/global.scss"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}
