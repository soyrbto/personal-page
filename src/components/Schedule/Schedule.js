import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { PopupModal } from 'react-calendly'

const portalRoot =
  typeof document !== `undefined` ? document.getElementById('portal') : null

export default function Schedule() {
  const [element, setElement] = useState(
    typeof document !== `undefined` ? document.createElement('div') : null
  )

  const [state, setState] = useState(false)

  useEffect(() => {
    portalRoot.appendChild(element)
    return () => {
      portalRoot.removeChild(element)
    }
  })

  return (
    <>
      <Button clickHandler={() => setState(true)}>Agenda una asesoria</Button>

      {element ? (
        <PopupModal
          url="https://calendly.com/soyrbto/hablemos"
          onModalClose={() => setState(false)}
          open={state}
          rootElement={document.getElementById('portal')}
        />
      ) : null}
    </>
  )
}
