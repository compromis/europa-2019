import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import IntLink from "./elements/int-link"
import Logo from "./elements/logo"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaBars } from "react-icons/fa"

class Header extends React.Component {
  toggleMenu () {
    document.documentElement.classList.toggle('menu-is-open')
  }

  render () {
    const { locale, text } = this.props

    return (
      <Navbar bg="light" fixed="top" className={'navbar--text-' + text}>
        <div className="container-fluid">
          <Logo />
          <Nav className="ml-auto">
            <ul className="menu-social d-none d-md-flex">
              <li><Nav.Link href="https://www.facebook.com/coaliciocompromis" className="social-icon facebook" target="_blank" rel="noopener"><FaFacebook /></Nav.Link></li>
              <li><Nav.Link href="https://twitter.com/compromis" className="social-icon twitter" target="_blank" rel="noopener"><FaTwitter /></Nav.Link></li>
              <li><Nav.Link href="https://www.instagram.com/compromis_net/" className="social-icon instagram" target="_blank" rel="noopener"><FaInstagram /></Nav.Link></li>
              <li><Nav.Link href="https://compromis.net/whatsapp" className="social-icon whatsapp" target="_blank" rel="noopener"><FaWhatsapp /></Nav.Link></li>
            </ul>
            <ul className="navbar-languages">
              { locale === 'es' ? <li><Link to="/val" locale="ca" className="nav-link"><span className="d-md-none">VAL</span><span className="d-none d-md-inline">Valencià</span></Link></li> : '' }
              { locale === 'ca' ? <li><Link to="/" locale="es" className="nav-link"><span className="d-md-none">CAS</span><span className="d-none d-md-inline">Castellano</span></Link></li> : '' }
            </ul>
            <button className="btn menu-button" onClick={() => { this.toggleMenu() }} aria-controls="menu">
              <span className="d-none d-md-inline">Menú</span> <FaBars />
            </button>
          </Nav>
        </div>
      </Navbar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  locale: PropTypes.string,
  text: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  locale: `ca`,
  text: 'dark'
}

export default Header
