import React from "react"
import { graphql } from "gatsby"

const testPage = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          publishedDate
          author
          image {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`

export default testPage
