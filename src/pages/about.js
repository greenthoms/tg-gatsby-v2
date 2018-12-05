import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Link from 'gatsby-link'


const About = styled.div`
    @media (min-width: 800px) {
        width: 70%;
    }
    p {
      @media (min-width: 800px) {
        font-size: 18px;
      }
    }
    a {
        text-decoration: none;
        box-shadow: inset 0 -1px 0 blue;
        color: inherit;
        &:hover{
          background-color: blue;
          color: #fff;
        }
    }
`


const AboutPage = () => (
  <Layout>
    <About>
      <p>I'm a designer and internet maker from Melbourne, Australia. My work focuses on user experience (UX) with a human-centered design approach. I love to work on projects which empower individuals, build communities and help organisations thrive.</p>
      <p>I've worked with organisations in healthcare, education, government and the arts. My full work history is on <a href="https://www.linkedin.com/in/greenthoms" target="_blank" rel="noopener noreferrer">Linkedin</a>.</p>
      <p>This site was built with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a> and the source is on <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>. I'm not currently <a href="https://twitter.com/greenthoms" target="_blank" rel="noopener noreferrer">tweeting</a> but I've started taking <Link to="notes">notes</Link>.</p>
      <p><strong>I'm always keen to hear from like minded people.</strong> <a href="mailto:thomasgreen@fastmail.com" target="_blank" rel="noopener noreferrer">Get in touch&nbsp;&rarr;</a></p>
    </About>
  </Layout>
)

export default AboutPage
