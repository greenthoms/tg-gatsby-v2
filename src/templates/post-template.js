import React from 'react'
// import Link from 'gatsby-link'

import { graphql } from 'gatsby'
import Layout from '../components/layout'

// Define the template for post list
export default function template({ data }) {
    const post = data.markdownRemark

    return(
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            <small>Posted by {post.frontmatter.authour} on {post.frontmatter.date}</small>
            <div dangerouslySetInnerHTML={{__html: post.html }} />
        </Layout>
    )
}

// Query the data for posts
export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter:{ path: {eq: $path }}){
            html
            frontmatter {
                path
                title
                author
                date
                description
            }
        }
    }
`