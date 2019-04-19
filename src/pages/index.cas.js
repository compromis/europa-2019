import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Candidates from "../components/candidates"
import TakeAction from "../components/take-action"
import News from "../components/news"

const IndexPage = () => (
  <Layout isFrontPage={true}> 
    <SEO lang="es" />
    <Hero />
    <Candidates />
    <TakeAction />
    <News />
  </Layout>
)

export default IndexPage
