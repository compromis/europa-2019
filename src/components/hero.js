import React from "react"

import Carousel from 'nuka-carousel'
import HeroSlide from './elements/hero-slide'

const Hero = () => (
  <div className="hero">
    <Carousel>
      <HeroSlide>
        <HeroSlide.Header>#Europa De Les Persones</HeroSlide.Header>
        <HeroSlide.Description>Lorem ipsum</HeroSlide.Description>
      </HeroSlide>
      <HeroSlide>
        <HeroSlide.Header>#Solidaritat</HeroSlide.Header>
        <HeroSlide.Description>Lorem ipsum</HeroSlide.Description>
      </HeroSlide>
    </Carousel>
  </div>
)

export default Hero