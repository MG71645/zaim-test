import React from 'react'

// Styles
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper header__wrapper">
        <div className="header__logo">{'[ лого }'}</div>
        <div className="header__description">
          Онлайн-заявка на&nbsp;получение микрозайма <b className="bold">с&nbsp;повышенной вероятностью одобрения</b>
        </div>
        <div className="header__title"><span className="bold">zaim</span> test</div>
      </div>
    </div>
  )
}

export default Header