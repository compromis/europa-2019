import React from "react"
import CandidateItem from "./candidate-list-item"

import AitanaPhoto from "../images/candidates/aitana-mas.jpg"
import FranPhoto from "../images/candidates/fran-ferri.jpg"
import MarzaPhoto from "../images/candidates/vicent-marza.jpg"
import IgnasiPhoto from "../images/candidates/ignasi-candela.jpg"
import MartaPhoto from "../images/candidates/marta-sorli.jpg"

const CandidateList = () => (
  <div className="block candidate-list container">
    <div className="row candidate-list-header">
        <h2 className="rotated">Candidatura</h2>
    </div>
    <div className="row">
      <div className="col-lg-3">    
        <CandidateItem image={AitanaPhoto} name="Aitana Mas" id="aitanamas" social={{facebook: 'aitana.mas', twitter: 'AitanaMas', instagram: 'aitana_mas'}} size="sm" />
      </div>
      <div className="col-lg-3">    
        <CandidateItem image={FranPhoto} name="Fran Ferri" id="franferri" social={{facebook: 'fraferfa', twitter: 'franferri_', instagram: 'franferri'}} size="sm" />
      </div>
      <div className="col-lg-3">    
        <CandidateItem image={MarzaPhoto} name="Vicent Marzà" id="vicentmarza" social={{facebook: 'vicentmarzaibanez', twitter: 'VicentMarza', instagram: 'vicentmarza'}} size="sm" />
      </div>
      <div className="col-lg-3">
        <CandidateItem image={IgnasiPhoto} name="Ignasi Candela" id="ignasicandela" social={{facebook: 'IgnasiCandelaSerna', twitter: 'IgnasiCandela', instagram: 'ignasi_candela_serna'}} size="sm" />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3">    
        <CandidateItem image={AitanaPhoto} name="Aitana Mas" id="aitanamas" social={{facebook: 'aitana.mas', twitter: 'AitanaMas', instagram: 'aitana_mas'}} size="sm" />
      </div>
      <div className="col-lg-3">    
        <CandidateItem image={FranPhoto} name="Fran Ferri" id="franferri" social={{facebook: 'fraferfa', twitter: 'franferri_', instagram: 'franferri'}} size="sm" />
      </div>
      <div className="col-lg-3">    
        <CandidateItem image={MarzaPhoto} name="Vicent Marzà" id="vicentmarza" social={{facebook: 'vicentmarzaibanez', twitter: 'VicentMarza', instagram: 'vicentmarza'}} size="sm" />
      </div>
      <div className="col-lg-3">
        <CandidateItem image={IgnasiPhoto} name="Ignasi Candela" id="ignasicandela" social={{facebook: 'IgnasiCandelaSerna', twitter: 'IgnasiCandela', instagram: 'ignasi_candela_serna'}} size="sm" />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3">    
        <CandidateItem image={AitanaPhoto} name="Aitana Mas" id="aitanamas" social={{facebook: 'aitana.mas', twitter: 'AitanaMas', instagram: 'aitana_mas'}} size="sm" />
      </div>
      <div className="col-lg-3">    
        <CandidateItem image={FranPhoto} name="Fran Ferri" id="franferri" social={{facebook: 'fraferfa', twitter: 'franferri_', instagram: 'franferri'}} size="sm" />
      </div>
      <div className="col-lg-3">    
        <CandidateItem image={MarzaPhoto} name="Vicent Marzà" id="vicentmarza" social={{facebook: 'vicentmarzaibanez', twitter: 'VicentMarza', instagram: 'vicentmarza'}} size="sm" />
      </div>
      <div className="col-lg-3">
        <CandidateItem image={IgnasiPhoto} name="Ignasi Candela" id="ignasicandela" social={{facebook: 'IgnasiCandelaSerna', twitter: 'IgnasiCandela', instagram: 'ignasi_candela_serna'}} size="sm" />
      </div>
    </div>

  </div>
)

export default CandidateList
