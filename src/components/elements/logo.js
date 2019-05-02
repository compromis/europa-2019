import React from "react"
import IntLink from "./int-link"
import { FormattedMessage } from "react-intl"

const Logo = () => (
  <IntLink to="/" className="navbar-brand">
    <span className="brand-logo">
      <span className="brand-logo-title"><FormattedMessage id="header_brand_1" /></span>
      <span className="brand-logo-subtitle"><FormattedMessage id="header_brand_2" /></span>
    </span>
  </IntLink>
)

export default Logo
