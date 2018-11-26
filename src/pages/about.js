import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Link from 'gatsby-link'


const About = styled.div`
  p {
    font-size: 17px;
    line-height: 1.45;
    font-weight: 500;
    margin-bottom: 1.25em;
    @media (min-width: 800px) {
        font-size: 26px;
        width: 66%;
    }
  }
  a {
    text-decoration: none;
    box-shadow: inset 0 -5px 0 gold;
    color: inherit;
    &:hover{background-color: gold;}
  }
`



const SecondPage = () => (
  <Layout>
    <About>
      <p>I'm a digital product and interaction designer in Melbourne, Australia. I’m interested in designing products, services and systems which empower individuals and create healthier communities.</p>
      <p>I’ve worked with organisations operating in healthcare, education, government and the arts. My full work history is on <a href="#0">Linkedin</a>.</p>
      <p>This site was built with <a href="#0">Gatsby</a> the source is available on <a href="#0">Github</a>. I take <Link to="notes">notes for future reference</Link> and save what I'm reading on <a href="https://www.goodreads.com/user/show/3196623-thomas-green">Goodreads</a>.</p>
      <p><strong>Want to work together?</strong> <a href="#0">Send an email</a>&nbsp;&rarr;</p>
    </About>
  </Layout>
)

export default SecondPage
