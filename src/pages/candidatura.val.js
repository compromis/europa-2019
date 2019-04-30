import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import CandidateList from "../components/candidate-list"
import LogoEuropaColor from "../components/elements/logo-europa-color"


const CandidaturaPage = () => (
  <Layout>
    <SEO lang="ca" title="Candidatura" />
    <LogoEuropaColor />
    <CandidateList />
  </Layout>
)

export default CandidaturaPage
