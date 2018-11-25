import React from 'react'

// Styles
import './Done.css'

const Done = () => {
  return (
    <div className="done">
      <span className="done__icon">✓</span><br/>
      <br/>
      Заявка отправлена.<br/>
      <br/>
      Ждите ответа от МФО.
    </div>
  )
}

export default Done
