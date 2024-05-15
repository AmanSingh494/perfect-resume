import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Box, Typography } from '@mui/material'
const Sidebar = styled(Box)`
  position: sticky;
  left: 0;
  top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: baseline;
  gap: 1rem;
  background-color: var(--color-secondary);
  color: white;
  padding: 2vh 4vw;
  height: calc(100vh - 60px);
  box-sizing: border-box;
`

const StepContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 30px;
`
const StepNumber = styled(Typography)`
  && {
    margin-right: 10px;
    color: #f2e0bf;
    font-size: var(--font-small);
  }
`

const StepName = styled(Typography)`
  && {
    font-family: var(--font-primary);
    font-size: var(--font-mid-medium);
  }
`

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`

const Circle = styled(Box)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  border: 2px solid white;
  margin-right: 10px;
  animation: ${({ active }) =>
    active
      ? css`
          ${blink} 4s infinite
        `
      : 'linear'};
`

const Step = styled(Box)`
  display: flex;
  flex-direction: column;
`
const Rectangle1 = styled.div`
  position: absolute;
  height: 70px;
  width: 70px;
  background-color: var(--color-primary);
  border-radius: 5px;
  z-index: -1;
  transform: rotate(45deg);
  top: 61px;
  left: 100px;
`
const Rectangle2 = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  background-color: var(--color-primary);
  border-radius: 5px;
  z-index: -1;
  transform: rotate(60deg);
  top: 215px;
  left: -35px;
`
const Rectangle3 = styled.div`
  position: absolute;
  height: 32px;
  width: 32px;
  background-color: var(--color-primary);
  border-radius: 5px;
  z-index: -1;
  transform: rotate(45deg);
  top: 351px;
  left: 238px;
`
const ProcessBar = () => {
  const steps = [
    'Personal Details',
    'Education',
    'Skills',
    'Projects or internships',
    'Work Experience',
    'Achievements',
    'Additional Courses'
  ]
  const currentStep = 1
  return (
    <Sidebar>
      {steps.map((step, index) => (
        <StepContainer key={index}>
          <Circle active={currentStep === index + 1} />
          <Step>
            <StepNumber>{`Step ${index + 1}`}</StepNumber>
            <StepName>{step}</StepName>
          </Step>
        </StepContainer>
      ))}
      <Rectangle1 />
      <Rectangle2 />
      <Rectangle3 />
    </Sidebar>
  )
}

export default ProcessBar
