import React from 'react'
import styled from 'styled-components'

const IntroContent = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin: 0 auto 2rem;
    text-align: left;
    padding-bottom: 2rem;
`

const Intro = ({ children }) => (
	<IntroContent>
		{children}
	</IntroContent>
)

export default Intro
