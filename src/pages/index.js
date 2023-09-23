import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaGulp } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsuby`, `application`, `react`]}>
      <h1>Hi people</h1>
      <p>welcome to your new gatsby</p>
    </SEO>
    <FaGulp />
  </Layout>
)

export default IndexPage
