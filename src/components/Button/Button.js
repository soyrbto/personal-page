import React from "react"
import "./button.scss"

export default function Button(props) {
  return (
    <div className="Button">
      <button>{props.children}</button>
    </div>
  )
}
