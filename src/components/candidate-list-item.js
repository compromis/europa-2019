import React from "react"
import IntLink from "./elements/int-link"
import { FormattedMessage } from "react-intl"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const CandidateItemWrapper = ({children, to, ...props}) => (
  <>
    { to ? <IntLink to={to} {...props}>{children}</IntLink> : <div {...props}>{children}</div> }
  </>
)

class CandidateItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      bioDisplayed: true
    }
  }

  toggleBio () {
    if (this.props.to) return

    this.setState({
      bioDisplayed: !this.state.bioDisplayed
    })
  }
  
  render () {
    const { name, id, image, to, size, social } = this.props
    const { bioDisplayed } = this.state

    return (
      <CandidateItemWrapper to={to} className={['candidate-list-item', 'candidate-list-item-' + size].join(' ')}>
        <div className="candidate-list-item-image">
          <img src={image} alt={name} />
        </div>
        <div className="candidate-list-item-name">
          <h3>{name}</h3>
          <div className={['candidate-list-item-bio', bioDisplayed ? '' : 'd-none'].join(' ')}>
            { social ? 
              <div className="candidate-social">
                <ul>
                  <li className="facebook"><a href={'https://www.facebook.com/' + social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                  <li className="twitter"><a href={'https://twitter.com/' + social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                  <li className="website"><a href={social.website} target="_blank" rel="noopener noreferrer">{social.webshort}</a></li>
                </ul>
              </div> : '' }
            
          </div>
        </div>
      </CandidateItemWrapper>
    )
  }
}

export default CandidateItem
