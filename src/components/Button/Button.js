import React from "react"
import "./button.scss"

export default function Button(props) {
  return (
    <div className={`Button ${props.style}`}>
      <button className={`title-read-small `}>{props.children}</button>
    </div>
  )
}
