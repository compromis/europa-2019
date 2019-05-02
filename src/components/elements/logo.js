import React from "react"
import { FormattedMessage } from "react-intl"

const Logo = () => (
  <span className="brand-logo">
    <span className="brand-logo-title"><FormattedMessage id="header_brand_1" /></span>
    <span className="brand-logo-subtitle"><FormattedMessage id="header_brand_2" /></span>
  </span>
)

export default Logo
