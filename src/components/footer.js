import React from "react"
import { FormattedMessage } from "react-intl"

const Footer = () => (
  <div className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <h4><FormattedMessage id="footer_follow" /> <strong>Compromiso por Europa</strong></h4>
          <div><iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=compromisEU&amp;show_screen_name=true&amp;show_count=true&amp;size=l&amp;lang=es" className="twitter" frameBorder={0} title="twitter"></iframe></div>
          <div><iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fcompromisoporeuropa&amp;width=450&amp;layout=standard&amp;action=like&amp;size=large&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=252515324782640&amp;locale=ca_ES" className="facebook" frameBorder={0} title="facebook"></iframe></div>
        </div>
        <div className="col-lg-6 footer-coalition">
          <div className="footer-coalition-links">
            <FormattedMessage id="footer_campaign" values={{name: <strong>Compromiso por Europa</strong>}} /><br />
            <a href="https://compromis.net" target="_blank" rel="noopener noreferrer">Compromís</a>,
            <a href="https://compromis.net" target="_blank" rel="noopener noreferrer">En Marea</a>,
            <a href="https://compromis.net" target="_blank" rel="noopener noreferrer">Més per Mallorca</a>,
            <a href="https://compromis.net" target="_blank" rel="noopener noreferrer">Chunta Aragonesista</a>,
            <a href="https://compromis.net" target="_blank" rel="noopener noreferrer">Partido Castellano</a>,
            <a href="https://compromis.net" target="_blank" rel="noopener noreferrer">Iniciativa del Pueblo Andaluz</a>,
            <a href="https://compromis.net" target="_blank" rel="noopener noreferrer">Izquierda Andalucista</a>,
            <a href="https://compromis.net" target="_blank" rel="noopener noreferrer">Caballas</a>,
            <a href="https://compromis.net" target="_blank" rel="noopener noreferrer">Coalición por Melilla</a>, y
            <a href="https://compromis.net" target="_blank" rel="noopener noreferrer">Verdes de Europa</a>.
          </div>
        </div>
      </div>  
    </div>
  </div>
)

export default Footer
