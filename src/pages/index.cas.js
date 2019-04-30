import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout isFrontPage={true}> 
    <SEO lang="es" />
    <Hero />
  </Layout>
)

export default IndexPage