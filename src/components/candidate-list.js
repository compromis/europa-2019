import React from "react"
import CandidateItem from "./candidate-list-item"
import IntLink from "./elements/int-link"
import SebastiaPhoto from "../images/candidates/jordi-sebastia.jpg"
import MariaPhoto from "../images/candidates/maria-senra.jpg"
import WeberPhoto from "../images/candidates/alice-weber.jpg"
import FanequePhoto from "../images/candidates/faneque.jpg"
import { FormattedMessage } from "react-intl";
import { FaChevronRight } from "react-icons/fa" 

const CandidateList = ({ showMore }) => (
  <div className="block candidate-list container">
    <div className="row">
      <div className="col candidate-list-header">
        <h2 className="rotated">Candidatura</h2>
      </div>
    </div>
    <div className="row candidate-list-row">
      <div className="col-lg-3">    
        <CandidateItem image={SebastiaPhoto} name="Jordi Sebastià" id="jordisebastia" social={{facebook: 'jordi.s.talavera', twitter: 'Sebastia_Jordi', website:'https://imparables.compromis.net/', webshort:'Compromis'}} size="sm" />
      </div>
      <div className="col-lg-3">    
        <CandidateItem image={MariaPhoto} name="Lidia Senra" id="mariasenra" social={{facebook: 'EnMareaGal', twitter: 'LidiaSenra', website:'https://enmarea.gal/', webshort:'En Marea'}} size="sm" />
      </div>
      <div className="col-lg-3">    
        <CandidateItem image={FanequePhoto} name="Faneque Hernández" id="fanequehernandez" social={{facebook: 'faneque.hernandez', twitter: 'Nueva_canarias', website:'http://www.nuevacanarias.org/', webshort:'Nueva Canarias'}} size="sm" />
      </div>
      <div className="col-lg-3">
        <CandidateItem image={WeberPhoto} name="Alice Weber" id="aliceweber" social={{facebook: 'alice.weber.56', twitter: 'NaAliceWeber', website:'http://latevadecisio.cat/', webshort:'Més per Mallorca'}} size="sm" />
      </div>
    </div>
    { showMore ? 
    <div className="row candidate-list-row">
      <div className="col">
        <hr />
        <IntLink to="/candidatura" className="candidate-list-more"><FaChevronRight /> <FormattedMessage id="candidates_all" /></IntLink>
      </div> 
    </div> 
    : '' }
  </div>
)

export default CandidateList
