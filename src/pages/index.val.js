import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CandidateList from "../components/candidate-list";
import Manifesto from "../components/manifesto"

const IndexPage = () => (
  <Layout isFrontPage={true}>
    <SEO lang="ca" />
    <Hero locale="ca" />
    <Manifesto />
    <CandidateList showMore={true} />
  </Layout>
)

export default IndexPage
