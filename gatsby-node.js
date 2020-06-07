const path = require("path")

// onCreateNode was used to generate slugs for the original basic markdown posts
// This is no longer required as we have created this field in Contentful

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // We need to adjust createPages
  // Instead of fetching the markdown slugs to createPages we want to use
  // the contentful slugs and use them

  // module.exports.createPages = async ({ graphql, actions }) => {
  //   const { createPage } = actions
  //   const blogTemplate = path.resolve("./src/templates/blog.js")
  //   const res = await graphql(`
  //     query {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)
  // Test code for prev, next post
  const posts = res.data.allContentfulBlogPost.edges

  posts.forEach((edge, index) => {
    // destructuring res.data.allContentfulBlogPost.edges
    const prev = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        prev,
        next,
      },
    })
  })
}
// When we loop through the data we can now use the contentful slug above

//   res.data.allMarkdownRemark.edges.forEach(edge => {
//     createPage({
//       component: blogTemplate,
//       path: `/blog/${edge.node.fields.slug}`,
//       context: {
//         slug: edge.node.fields.slug,
//       },
//     })
//   })
// }
