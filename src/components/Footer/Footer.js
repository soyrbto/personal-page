import React from 'react'
import './footer.scss'

export default function Footer({ className = '' }) {
  const staticContent = [
    {
      link: 'https://www.instagram.com/soytraspalacio/',
      img: './images/instagram.svg',
      text: 'soytraspalacio',
    },
    {
      link: 'mailto:hola@soytraspalacio.com',
      img: './images/email.svg',
      text: 'hola@soytraspalacio',
    },
    {
      link: 'https://github.com/soyrbto',
      img: './images/github.svg',
      text: 'soytraspalacio',
    },
  ]

  return (
    <footer className={className}>
      <ul>
        {staticContent.map((content, i) => {
          return (
            <li key={i}>
              <a href={content.link} rel="noreferrer noopener" target="_blank">
                <img src={content.img} alt="" />
                <p>{content.text}</p>
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
