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
            <HeroSlide.Header>#Europa De Les Persones</HeroSlide.Header>
            <HeroSlide.Description>Apostamos por la transición ecológica de la economía (New Deal Verde) hacia otro modelo productivo y de consumo basado en la economía social, sostenible y del bien común, es decir una prosperidad compartida. Financiaremos la creación de empleos verdes y decentes, además de I+D+i, con una reforma fiscal que tase ante todo los recursos y los capitales.</HeroSlide.Description>
          </HeroSlide>
          <HeroSlide>
            <HeroSlide.Header>#Solidaritat</HeroSlide.Header>
            <HeroSlide.Description>Reclamamos una Carta de los derechos fundamentales sociales para garantizar educación, sanidad, justicia y medio ambiente para toda/os, incluidas las personas migrantes. Priorizamos la lucha contra la pobreza y la exclusión social e impulsaremos la defensa de la renta básica universal, así como una cartera de servicios sociales mínimos para facilitar la autonomía personal y la integración de las personas con diversidad funcional física y/o psíquica.</HeroSlide.Description>
          </HeroSlide>
          <HeroSlide>
            <HeroSlide.Header>#Europa de los Pueblos</HeroSlide.Header>
            <HeroSlide.Description>Reivindicamos la Europa de los Pueblos, y el apoyo y respeto de la UE a su diversidad nacional, cultural y lingüística, incluyendo las minorías y naciones sin Estado. Rechazamos el recorte a su autonomía y procesos de decisión democráticos y reclamamos la participación real y efectiva de las unidades subestatales en la toma de decisiones europeas, con especial atención a las Regiones Europeas Ultraperiféricas dotándolas de su propia circunscripción electoral.</HeroSlide.Description>
          </HeroSlide>
        </Carousel>
      </div>
    )
  }
}

export default Hero