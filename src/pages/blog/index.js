import React from 'react'
import { PopupWidget } from 'react-calendly'

export default function index() {
  return (
    <PopupWidget
      url="https://calendly.com/your_scheduling_page"
      /*
       * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
       * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
       */
      rootElement={document.getElementById('root')}
      text="Click here to schedule!"
      textColor="#ffffff"
      color="#00a2ff"
    />
  )
}
