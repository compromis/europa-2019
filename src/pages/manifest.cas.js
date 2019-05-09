import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import Manifesto from "../components/manifesto"

const ManifestoPage = () => (
  <Layout>
    <SEO lang="es" title="Manifiesto" />
    <Manifesto forceTextExpanded={true} />
  </Layout>
)

export default ManifestoPage
