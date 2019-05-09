import React from "react"
import Carousel from "nuka-carousel"
import ReactCSSTransitionReplace from "react-css-transition-replace"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

import Header from "./header"
import HeroSlide from "./elements/hero-slide"

const HeroBackground = ({ current }) => (
  <ReactCSSTransitionReplace
    transitionName="cross-fade"
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={1000}>
    <div key={current} className="hero-background-image" style={{backgroundImage: 'url(/images/slides/' + current + '.jpg)'}}></div>
  </ReactCSSTransitionReplace>
)

class Hero extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      slideIndex: 0
    }
  }

  render () {
    const { locale } = this.props

    return (
      <div className="hero">
        <div className="hero-background">
          <Header text="light" locale={locale} />
          <HeroBackground current={this.state.slideIndex} />
        </div>
        <Carousel
          ref="hero"
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
          renderCenterLeftControls={({ previousSlide }) => (
            <button className="btn hero-control d-none d-md-block" onClick={previousSlide}><FaChevronLeft /></button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button className="btn hero-control d-none d-md-block" onClick={nextSlide}><FaChevronRight /></button>
          )}
          autoplay>
          <HeroSlide>
            <HeroSlide.Header>#EUROPACERCANA</HeroSlide.Header>
            <HeroSlide.Description>Por una Europa más cercana. Nos comprometemos a trasladar a las instituciones europeas las propuestas de la ciudadanía y rendir cuentas de nuestra actividad de forma periódica. El Parlamento Europeo no puede ser un retiro dorado para las viejas glorias del bipartidismo.</HeroSlide.Description>
          </HeroSlide>
          <HeroSlide>
            <HeroSlide.Header>#EUROPADELASPERSONAS</HeroSlide.Header>
            <HeroSlide.Description>Por una Europa de las personas. Lucharemos contra la privatización de las pensiones públicas que impulsa la gran coalición de socialistas y populares con su modelo neoliberal. Todas las personas deben tener derecho a una pensión digna.</HeroSlide.Description>
          </HeroSlide>
          <HeroSlide>
            <HeroSlide.Header>#EUROPAFEMINISTA</HeroSlide.Header>
            <HeroSlide.Description>Por una Europa feminista. Impulsaremos una Directiva Europea contra la Violencia Machista porque no queremos ni una víctima más.</HeroSlide.Description>
          </HeroSlide>
          <HeroSlide>
            <HeroSlide.Header>#EUROPASOSTENIBLE</HeroSlide.Header>
            <HeroSlide.Description>Por una Europa sostenible. Más ambición en la lucha contra el cambio climático ante la avaricia los poderosos. Necesitamos un mínimo del 35% de energía renovable en 2030.</HeroSlide.Description>
          </HeroSlide>
          <HeroSlide>
            <HeroSlide.Header>#EUROPASOCIAL</HeroSlide.Header>
            <HeroSlide.Description>Por una Europa social. Exigiremos una renta mínima europea. La Unión Europea produce riqueza pero no bienestar, tenemos un 23% de pobreza y es una vergüenza.</HeroSlide.Description>
          </HeroSlide>
          <HeroSlide>
            <HeroSlide.Header>#NOAPARAÍSOSFISCALES</HeroSlide.Header>
            <HeroSlide.Description>Por una política fiscal europea común al servicio de las personas. No a los paraísos fiscales dentro la UE que permiten ahorrarse impuestos a las grandes multinacionales (Luxemburgo, Países Bajos, Irlanda).</HeroSlide.Description>
          </HeroSlide>
          <HeroSlide>
            <HeroSlide.Header>#INFRAESTRUCTURAS</HeroSlide.Header>
            <HeroSlide.Description>Por unas infraestructuras europeas sostenibles y eficaces que permitan generar empleo de calidad en nuestras empresas.</HeroSlide.Description>
          </HeroSlide>
        </Carousel>
      </div>
    )
  }
}

export default Hero


