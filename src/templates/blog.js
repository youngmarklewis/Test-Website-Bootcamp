import React from "react"
import { Link, graphql } from "gatsby"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subTitle
      author
      fullDate: publishedDate(formatString: "Do MMMM YYYY")
      fromNow: publishedDate(fromNow: true)
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

// The old query for markdown

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// This code renders our content to the blog slug

//const Blog = props => {
const Blog = (props, pageContext) => {
  const { prev, next } = pageContext

  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": node => {
  //       const alt = node.data.target.fields.title["en-US"]
  //       const url = node.data.target.fields.file["en-US"].url
  //       return <Image alt={alt} src={url} />
  //     },
  //   },
  // }
  // console.log(options)

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <p>{props.data.contentfulBlogPost.fullDate}</p>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      {props.data.contentfulBlogPost.author} {" Add author image "}
      <Image fluid={props.data.contentfulBlogPost.image.fluid} />
      <h2>{props.data.contentfulBlogPost.subTitle}</h2>
      <p>
        <span>
          {props.data.contentfulBlogPost.fromNow}
          <p>
            {
              props.data.contentfulBlogPost.content.childContentfulRichText
                .timeToRead
            }
            {" Minute read... "}
          </p>
        </span>
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html:
            props.data.contentfulBlogPost.content.childContentfulRichText.html,
        }}
      />
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            <p>test previous</p>
            {prev && (
              <Link to={"prev.slug"} rel="prev">
                ← {"prev.props.data.contentfulBlogPost.title"}
              </Link>
            )}
          </li>
          <li>
            <p>test next</p>
            {next && (
              <Link to={"next.slug"} rel="next">
                {"next.props.data.contentfulBlogPost.title"} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

// Old blog component

// const Blog = props => {
//   return (
//     <Layout>
//       <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//       <p>{props.data.markdownRemark.frontmatter.date}</p>
//       <div
//         dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
//       ></div>
//     </Layout>
//   )
// }

export default Blog
