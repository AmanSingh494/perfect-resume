import React from 'react'
import styled from 'styled-components'
const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`
const MadeByDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const MadeByText = styled.p`
  letter-spacing: 3px;
  text-align: center;
  /* font-size: var(--font-ex-large); */
  font-family: var(--font-secondary);
  font-weight: var(--font-mid-bold);
  border: 2px solid black;
  background-color: var(--color-primary);
  color: white;
  width: 100vw;
`
const HeartIcon = styled.span`
  color: red;
`
const Footer = () => {
  return (
    <FooterContainer>
      <MadeByDiv>
        <MadeByText>
          CRAFTED WITH <HeartIcon>♥</HeartIcon> BY AMAN &copy; 2024
        </MadeByText>
      </MadeByDiv>
    </FooterContainer>
  )
}

export default Footer
