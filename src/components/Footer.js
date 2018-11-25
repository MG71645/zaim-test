import React from 'react'

// Styles
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper footer__wrapper">
        <div className="footer__background"/>
        <div className="footer__content">
          <span className="footer__copyright">© 2018 zaim-test.com</span>
          <span className="footer__link">Политика конфиденциальности</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
