import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const Project = styled.div `
  display: flex;
  padding: 2em;
  margin: 1.5rem 0;
  font-size: 24px;
  line-height: 1.4;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  h2 {
    font-size: 24px;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  a {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    background-color: #333;
    padding: .6rem 1.5rem .7rem;
    display: inline-block;
    text-decoration: none;
    &:hover,
    &:active
    &:focus {
      background-color: #000;
    }
  }
  @media(max-width: 600px) {
    padding: 1rem;
    flex-direction:column;
  }
`
const Excerpt = styled.div`
  flex: 6;
  @media(max-width: 600px) {
    flex: 0 0 100%;
  }
`

const Thumbnail = styled.div `
  flex: 4;
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
              childImageSharp{
                sizes(maxWidth: 1900) {
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