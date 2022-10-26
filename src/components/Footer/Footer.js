import React from 'react'
import './footer.scss'

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/soytraspalacio/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="./images/instagram.svg" alt="" />
            <p>soytraspalacio</p>
          </a>
        </li>
        <li>
          <a href="mailto:hola@soytraspalacio.com">
            <img src="./images/email.svg" alt="" />
            <p>hola@soytraspalacio.com</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/soyrbto">
            <img src="./images/github.svg" alt="" />
            <p>soytraspalacio</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
