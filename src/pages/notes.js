import React from 'react'
// import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const Intro = styled.p`
  @media (min-width: 800px) {
    font-size: 26px;
  }
`

const NoteContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -1rem;
    margin-right: -1rem;
    justify-content: center;
`

const Note = styled.a`
    font-weight: 400;
    min-width: 15rem;
    max-width: 20rem;
    color: #000;
    text-align: center;
    background-color: lightyellow;
    padding: 3rem 3rem;
    margin: .5rem;
    text-decoration: none;
    box-shadow: #000;
    &:hover,
    &:active,
    &:focus {
      background-color: #fff;
    }
    h2 {
      font-size: 24px;
      font-weight: 600;
      margin: .25rem;
    }
    small {
      font-size: 14px;
      color: #444;
    }
`

// Markup structure
const Notes = ({ data }) => (
  <Layout>
      <Intro>Cheat sheets, book summaries and work related reference material.</Intro>
      <NoteContainer>
        {data.allMarkdownRemark.edges.map(post => (
        <Note key={post.node.id} href={post.node.frontmatter.path}>
          <h2>{post.node.frontmatter.title}</h2>
          <small>Updated on {post.node.frontmatter.date}</small>
        </Note>
      ))}
    </NoteContainer>
  </Layout>
)

// Query
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {
        frontmatter: {
          postType: {
            eq: "note"
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
            date
            author
          }
        }
      }
    }
  }
`

export default Notes