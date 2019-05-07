import React from "react"
import { FormattedMessage } from "react-intl"

const Footer = () => (
  <div className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <h4><FormattedMessage id="footer_follow" /> <strong>Compromiso por Europa</strong></h4>
          <div><iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=compromisEU&amp;show_screen_name=true&amp;show_count=true&amp;size=l&amp;lang=es" className="twitter" frameBorder={0} title="twitter"></iframe></div>
          <div><iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2FcompromisoEU&amp;width=450&amp;layout=standard&amp;action=like&amp;size=large&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=252515324782640&amp;locale=ca_ES" className="facebook" frameBorder={0} title="facebook"></iframe></div>
        </div>
        <div className="col-lg-6">
          <p><FormattedMessage id="footer_campaign" values={{name: <strong>Compromiso por Europa</strong>}} /></p>
          <p><a href="mailto:info@compromis.net">info@compromisoporeuropa.com</a></p>
        </div>
      </div>  
    </div>
  </div>
)

export default Footer
