import React from "react"
import { FormattedMessage } from "react-intl"
import IntLink from "./elements/int-link"
import Logo from "./elements/logo"
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTimes } from "react-icons/fa"

class Menu extends React.Component {
  toggleMenu () {
    document.documentElement.classList.toggle('menu-is-open')
  }

  render () {
    const { locale } = this.props

    return (
      <div id="menu" className="menu d-print-none">
        <div className="container-fluid">
          <div className="row menu-header">
            <div className="col-6">
              <Logo />
            </div>
            <div className="col-6">
              <button className="btn menu-button" onClick={() => { this.toggleMenu() }} aria-controls="menu">
                <span className="d-none d-md-inline">Menú</span> <FaTimes />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="menu-main">
                <li><IntLink className="menu-link" to="/candidatura"><span><FormattedMessage id="menu_candidatura" /></span></IntLink></li>
                <li><IntLink className="menu-link" to="/programa"><span><FormattedMessage id="menu_manifesto" /></span></IntLink></li>
              </ul>
              <ul className="mt-4 menu-social">
                <li><a href="https://www.facebook.com/coaliciocompromis" className="social-icon facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                <li><a href="https://twitter.com/compromis" className="social-icon twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                <li><a href="https://www.instagram.com/compromis_net/" className="social-icon instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                <li><a href="https://compromis.net/whatsapp" className="social-icon whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
              </ul>
              <ul className="mt-4 menu-languages">
                { locale === 'es' ? <li><IntLink to="/" locale="ca">En valencià</IntLink></li> : '' }
                { locale === 'ca' ? <li><IntLink to="/" locale="es">En castellano</IntLink></li> : '' }
              </ul>
              <ul className="mt-4 menu-languages">
                <li><a href="https://compromis.net/arxiu/"><FormattedMessage id="menu_news" /></a></li>
                <li><a href="https://compromis.net/info/transparencia/"><FormattedMessage id="menu_transparency" /></a></li>
                <li><a href="https://compromis.net/vot-correu"><FormattedMessage id="menu_absenteeballot" /></a></li>
                <li><a href="https://compromis.net/?skip=1">compromis.net</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu