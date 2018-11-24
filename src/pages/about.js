import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const About = styled.div`
  font-size: 18px;
  padding: 0;
  line-height: 1.4;
  a {
      text-decoration: none;
      padding: 0 .25em .1em;
      color: inherit;
      background-color: #befcee;
      &:hover{background-color: cyan;}
    }
`

const Intro = styled.p`
    font-size: 24px;
    font-weight: 500;
    flex: 0 0 100%;
    padding-bottom: 2rem;
    border-bottom: dashed 1px #aaa;
`

const SecondPage = () => (
  <Layout>
    <About>
      <Intro>
        Hey I'm Thomas, a designer from Melbourne. I design and build things for the internet. I’m interested in designing systems which empower individuals and communities. I’ve worked with clients in health, education and government. <a href="#0">Get in touch&nbsp;&rarr;</a>
      </Intro>
      <div>I like to read and sometimes take <a href="#0">notes for future refrence</a> and save things on <a href="https://www.goodreads.com/user/show/3196623-thomas-green">Goodreads</a>. I'm not a programmer but I'm a huge fan of <a href="https://www.w3.org/wiki/Open_Web_Platform">open web technologies</a> and enjoy writing/learning HTML, CSS and Javascript. This site was built with React using a great toolchain called <a href="#0">Gatsby</a> the source is available on <a href="#0">Github</a>. I also occasionally mess around on <a href="#0">Codepen</a>. My work history is on <a href="#0">Linkedin</a> and I'm always interested in new oppurtunities so don't hesitate to <a href="#0">send me an email</a>.
      </div>
    </About>
  </Layout>
)

export default SecondPage
