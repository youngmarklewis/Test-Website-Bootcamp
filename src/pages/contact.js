/* eslint-disable react/jsx-no-target-blank */
import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>These are my contact details:</p>
      <ul>email: youngmarklewis@gmail.com</ul>
      <ul>
        <a href="https://www.bbc.co.uk" target="_blank">
          BBC
        </a>
      </ul>
      <ul>city: Leeds, United Kingdom</ul>
      <ul>Occupation: Test Analyst</ul>
    </Layout>
  )
}
export default ContactPage
