import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CandidateList from "../components/candidate-list";
import Manifesto from "../components/manifesto"


const IndexPage = () => (
  <Layout isFrontPage={true}> 
    <SEO lang="es" />
    <Hero />
    <Manifesto />
  </Layout>
)

export default IndexPage
