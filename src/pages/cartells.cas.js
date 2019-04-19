import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Candidates from "../components/candidates"
import TakeAction from "../components/take-action"

const CartellsPage = () => (
  <Layout>
    <SEO lang="es" />
    <Candidates />
    <TakeAction />
  </Layout>
)

export default CartellsPage
