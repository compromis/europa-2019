import React from "react"
import ReactFBLike from 'react-fb-like'
import { TwitterShareButton } from "react-twitter-embed"

const Header = ({ children }) => (
  <h3 className="hero-slide-header rotated">{ children }</h3>
)

const Description = ({ children }) => (
  <p className="hero-slide-description">{ children }</p>
)

const Call = ({ children }) => (
  <div className="hero-slide-call">{ children }</div>
)

class HeroSlide extends React.Component {
  static Header = Header
  static Description = Description
  static Call = Call

  render () {
    const { name, children } = this.props

    return (
      <div className={['hero-slide', name].join(' ')}>
        <div className="container">
          <div>
            {React.Children.map(children, child => child)}
            <div className="hero-slide-share">
              <TwitterShareButton
                url={'https://compromisoporeuropa.eu'}
                options={{ text: '#CompromisoPorEuropa', via: 'compromisoEU' }}
              />
              <ReactFBLike href="https://compromisoporeuropa.eu" layout="button_count" language="es_ES" appId="603979510082106" version="v2.12" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroSlide