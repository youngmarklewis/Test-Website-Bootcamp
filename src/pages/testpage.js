import React from "react"
import { graphql } from "gatsby"

const testPage = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    contentfulBlogPost {
      title
      subTitle
      author
      publishedDate
      image {
        fluid {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
      content {
        childContentfulRichText {
          html
          timeToRead
        }
      }
    }
  }
`

export default testPage
