import React from "react"

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
          </div>
        </div>
      </div>
    )
  }
}

export default HeroSlide