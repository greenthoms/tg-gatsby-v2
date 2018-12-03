import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const HeaderWrapper = styled.div`
  margin-bottom: 6vw;
  border-bottom: solid 1px #444;
`
const HeaderContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 960px;
  margin: auto;
  a {
    font-size: 18px;
    padding: 1rem;
    font-weight: 500;
    color: #ddd;
    text-decoration: none;
  }
`
const Nav = styled.div`
  display: flex;
`
const Social = styled.div`
  flex-wrap: wrap;
  display: none;
  @media(min-width: 800px) {
    display: flex;
  }
`
const Title = styled.h1`
  margin: 0;
  font-weight: inherit;
  line-height: inherit;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContain>
      <Title><Link to="/">{siteTitle}</Link></Title>
      <Nav>
        <Link to="/">Work</Link>
        <Link to="/about/">About</Link>
        <Link to="/notes/">Notes</Link>
      </Nav>
      <Social>
        <a href="mailto:thomasgreen@fastmail.com">Contact</a>
      </Social>
    </HeaderContain>
  </HeaderWrapper>
)

export default Header
