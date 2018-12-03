import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const Project = styled.div `
  display: flex;
  margin-bottom: 8vw;
  font-size: 26px;
  line-height: 1.4;
  color: #ddd;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  h2 {
    font-weight:900;
    margin-bottom: 1rem;
  }
  a {
    color: #ddd;
    font-size: 1rem;
    font-weight: 600;
    background-color: darkblue;
    padding: .6rem 1.5rem .7rem;
    display: inline-block;
    text-decoration: none;
    border-radius: 4px;
    &:hover,
    &:active
    &:focus {
      background-color: blue;
    }
  }
  @media(max-width: 600px) {
    padding: 1rem;
    flex-direction:column;
  }
`
const Excerpt = styled.div`
  flex: 9;
  @media(max-width: 600px) {
    flex: 0 0 100%;
  }
`

const Thumbnail = styled.div `
  flex: 16;
  display: block;
  margin: 0 0 1rem 0;
  @media(min-width: 600px) {
      margin: 0 3rem 0 0;
  }
`

// Markup structure
const Projects = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(post => (
      <div>
      <Project key={post.node.id}>
        <Thumbnail>
          <Img sizes={post.node.frontmatter.featuredImage.childImageSharp.sizes} />
        </Thumbnail>
        <Excerpt>
          <h2>{post.node.frontmatter.title}</h2>
          <p>{post.node.frontmatter.description}</p>
          <Link to={post.node.frontmatter.path}>View project&nbsp;&nbsp;&nbsp;&nbsp;&rarr;</Link>
        </Excerpt>
      </Project>
      </div>
    ))}
  </Layout>
)

// Query
export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {
        frontmatter: {
          postType: {
            eq: "project"
          }
        }
      }
    ){
      edges {
        node {
          id
          frontmatter {
            path
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 960) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Projects