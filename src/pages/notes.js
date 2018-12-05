import React from 'react'
// import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const Intro = styled.p`
    font-size: 18px;
    text-align: center;
    margin-bottom: 4vw;
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
    max-width: 20rem;
    color: #ddd;
    text-align: center;
    background-color: #000;
    border: solid 1px #333;
    padding: 5rem 3rem;
    margin: 1rem;
    text-decoration: none;
    &:hover,
    &:active,
    &:focus {
      background-color: #111;
    }
    h2 {
      font-size: 18px;
      font-weight: 600;
      margin: .25rem;
    }
    small {
      font-size: 14px;
      color: #666;
    }
`

// Markup structure
const Notes = ({ data }) => (
  <Layout>
      <Intro>My personal collection of cheat sheets, book summaries and quick links to reference material.</Intro>
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
            date(formatString: "MMMM Do, YYYY")
            author
          }
        }
      }
    }
  }
`

export default Notes