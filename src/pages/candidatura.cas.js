import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import CandidateList from "../components/candidate-list"
import CandidateNames from "../components/candidate-names";


const CandidaturaPage = () => (
  <Layout>
    <SEO lang="es" title="Candidatura" />
    <CandidateList />
    <CandidateNames />
  </Layout>
)

export default CandidaturaPage
