/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Link } from "gatsby" // React Link component

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>My Website</h1>
      <h2>I'm learning Gatsby</h2>
      <p>
        Need a tester?
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
