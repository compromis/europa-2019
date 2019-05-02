import React from "react"

import Header from "./header"
import Carousel from "nuka-carousel"
import HeroSlide from "./elements/hero-slide"

const Hero = ({ locale }) => (
  <div className="hero">
    <div className="hero-background">
      <Header text="light" locale={locale} />
      <div className="hero-background-image"></div>
    </div>
    <Carousel>
      <HeroSlide>
        <HeroSlide.Header>#Europa De Les Persones</HeroSlide.Header>
        <HeroSlide.Description>Apostamos por la transición ecológica de la economía (New Deal Verde) hacia otro modelo productivo y de consumo basado en la economía social, sostenible y del bien común, es decir una prosperidad compartida. Financiaremos la creación de empleos verdes y decentes, además de I+D+i, con una reforma fiscal que tase ante todo los recursos y los capitales.</HeroSlide.Description>
      </HeroSlide>
      <HeroSlide>
        <HeroSlide.Header>#Solidaritat</HeroSlide.Header>
        <HeroSlide.Description>Lorem ipsum</HeroSlide.Description>
      </HeroSlide>
    </Carousel>
  </div>
)

export default Hero