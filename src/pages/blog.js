import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout offset>
      <h1 className="text-center">Blog</h1>
      <div className="container text-center">
        {edges.map(({ node: post }) => {
          return (
            <div>
              <Link to={post.frontmatter.slug}>
                {post.frontmatter.title} ({post.frontmatter.date})
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
