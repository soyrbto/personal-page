import React, { useState } from 'react'
import { PopupModal } from 'react-calendly'
// import Button from '../Button/Button'

export default function ScheduleButton() {
  const [popupSTate, setPopupState] = useState(false)

  return (
    <>
      <button onClick={() => setPopupState(true)}>
        Este es un boton de prueba
      </button>
      <PopupModal
        url="https://calendly.com/soyrbto/30min"
        onModalClose={() => setPopupState(false)}
        open={popupSTate}
        rootElement={document.getElementById('root')}
      />
    </>
  )
}
