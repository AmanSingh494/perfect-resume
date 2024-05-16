import React, { useEffect, useRef, useState } from 'react'
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
  0% { background-color: white; }
  50% {  background-color: var(--color-secondary); }
  100% { background-color: white;}
`

const Circle = styled(Box).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['active'].includes(prop) && defaultValidatorFn(prop)
})`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? 'white' : 'var(--color-secondary)'};
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
  z-index: -5;
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
  z-index: -5;
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
  z-index: -5;
  transform: rotate(45deg);
  top: 351px;
  left: 238px;
`
const PathBlack = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['top', 'height'].includes(prop) && defaultValidatorFn(prop)
})`
  width: 4px;
  background-color: var(--color-primary);
  height: ${({ height }) => `calc(6*${height}px )`};
  position: absolute;
  top: ${({ top, height }) => `${top - height}px`};
  left: 4.8vw;
  z-index: -1;
`
const PathWhite = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['top', 'height', 'step'].includes(prop) && defaultValidatorFn(prop)
})`
  width: 4px;
  background-color: white;
  height: ${({ height, step }) => `calc(${step - 1}*${height}px )`};
  position: absolute;
  top: ${({ top, height }) => `${top - height}px`};
  left: 4.8vw;
  z-index: -1;
  transition: height 1s linear;
`
const ProcessBar = ({ step, setStep }) => {
  const steps = [
    'Personal Details',
    'Education',
    'Skills',
    'Projects or internships',
    'Work Experience',
    'Achievements',
    'Additional Courses'
  ]

  // using useRef and useEffect hook to get the top of circle1 and circle2, difference between them is the height and then will mulitply it to get the height of the path
  const circle1Ref = useRef(null)
  const circle2Ref = useRef(null)
  const [top, setTop] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (circle1Ref.current && circle2Ref.current) {
      const circle1Pos = circle1Ref.current.getBoundingClientRect().top
      const circle2Pos = circle2Ref.current.getBoundingClientRect().top
      setTop(circle1Pos)
      setHeight(circle2Pos - circle1Pos)
    }
  }, [])

  return (
    <Sidebar>
      {steps.map((step, index) => (
        <StepContainer
          key={index}
          onClick={() => {
            setStep(index + 1)
          }}
        >
          <Circle
            ref={index === 0 ? circle1Ref : index === 1 ? circle2Ref : null}
            active={step === index + 1}
          />
          <Step>
            <StepNumber>{`Step ${index + 1}`}</StepNumber>
            <StepName>{step}</StepName>
          </Step>
        </StepContainer>
      ))}
      <PathBlack top={top} height={height} />
      <PathWhite top={top} height={height} step={step} />

      <Rectangle1 />
      <Rectangle2 />
      <Rectangle3 />
    </Sidebar>
  )
}

export default ProcessBar
