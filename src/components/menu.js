import React from "react"
import { FormattedMessage } from "react-intl"
import IntLink from "./elements/int-link"
import Logo from "./elements/logo"
import { FaFacebook, FaTwitter, FaTimes } from "react-icons/fa"

class Menu extends React.Component {
  toggleMenu () {
    document.documentElement.classList.toggle('menu-is-open')
  }

  render () {
    // const { locale } = this.props

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
                <li><IntLink className="menu-link" to="/candidatura" onClick={() => this.toggleMenu()}><span><FormattedMessage id="menu_candidatura" /></span></IntLink></li>
                <li><IntLink className="menu-link" to="/manifest" onClick={() => this.toggleMenu()}><span><FormattedMessage id="menu_manifesto" /></span></IntLink></li>
              </ul>
              <ul className="mt-4 menu-social">
                <li><a href="https://www.facebook.com/compromisoporeuropa" className="social-icon facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                <li><a href="https://twitter.com/compromisoEU" className="social-icon twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
              </ul>
              <div className="mt-4 menu-coalition">
                <FormattedMessage id="footer_campaign" values={{name: <strong>Compromiso por Europa</strong>}} />
                <a href="https://compromis.net" target="_blank" rel="noopener noreferrer">Compromís</a>,
                <a href="https://enmarea.gal" target="_blank" rel="noopener noreferrer">En Marea</a>,
                <a href="https://www.mespermallorca.cat" target="_blank" rel="noopener noreferrer">Més per Mallorca</a>,
                <a href="https://www.chunta.com" target="_blank" rel="noopener noreferrer">Chunta Aragonesista</a>,
                <a href="http://www.partidocastellano.org/" target="_blank" rel="noopener noreferrer">Partido Castellano</a>,
                <a href="https://iniciativadelpuebloandaluz.org/" target="_blank" rel="noopener noreferrer">Iniciativa del Pueblo Andaluz</a>,
                <a href="https://www.izquierdaandalucista.org/" target="_blank" rel="noopener noreferrer">Izquierda Andalucista</a>,
                <a href="https://www.caballasceuta.com/" target="_blank" rel="noopener noreferrer">Caballas</a>,
                <a href="http://www.coalicionpormelilla.com/" target="_blank" rel="noopener noreferrer">Coalición por Melilla</a>, y
                <a href="http://www.verdes-villena.org/" target="_blank" rel="noopener noreferrer">Verdes de Europa</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu