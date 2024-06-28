import React, { useState } from 'react'
import styled from 'styled-components'

const PreviewBarDiv = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 2vh 4vw 2vh 1vw;
  right: 0;
  top: 60px;
  display: flex;
  height: 100vh;
  width: 20vw;
  background-color: var(--color-secondary);
  color: white;
`

const ArrowDiv = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['isOpen'].includes(prop)
})`
  background-color: #ffffff36;
  border: 1px solid white;
  border-radius: 5px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0)' : 'rotate(180deg)')};
  /* transition: transform 0.5s ease-in-out; */
`
const PreviewBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <PreviewBarDiv>
      <ArrowDiv isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span
          className='material-symbols-outlined'
          style={{ padding: '15px 0', fontSize: '2rem' }}
        >
          chevron_right
        </span>
      </ArrowDiv>
    </PreviewBarDiv>
  )
}

export default PreviewBar
