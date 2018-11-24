import React from 'react'
// import Link from 'gatsby-link'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

import styled from 'styled-components'

const Intro = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin: 0 auto 2rem;
    text-align: center;
    padding-bottom: 2rem;
    border-bottom: dashed 1px #aaa;
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