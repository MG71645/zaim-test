import React from 'react'

// Styles
import './Footer.css'

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer__background"/>
      <div className="footer__content">
        <span className="footer__copyright">© 2018 zaim-test.com</span>
        <span className="footer__link">Политика конфиденциальности</span>
      </div>
    </React.Fragment>
  )
}

export default Footer
