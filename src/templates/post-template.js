import React from 'react'
// import Link from 'gatsby-link'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const Date = styled.p`
    color: #777;
`

export default function template({ data }) {
    const post = data.markdownRemark
    return(
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            {post.frontmatter.postType === "note" &&
                <Date>Updated on {post.frontmatter.date}</Date>
            }
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
                date(formatString: "MMMM Do, YYYY")
                description
                postType
            }
        }
    }
`