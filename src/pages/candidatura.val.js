import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import CandidateList from "../components/candidate-list"
import CandidateNames from "../components/candidate-names";

const CandidaturaPage = () => (
  <Layout>
    <SEO lang="ca" title="Candidatura" />
    <CandidateList />
    <hr />
    <CandidateNames />
  </Layout>
)

export default CandidaturaPage
