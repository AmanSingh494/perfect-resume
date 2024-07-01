import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Box, Typography } from '@mui/material'

//withConfig is used to not let the passed prop to be passed to the underlying dom element
const Sidebar = styled(Box).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['isOpen'].includes(prop)
})`
  position: fixed;
  left: 0;
  top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: baseline;
  gap: 2rem;
  background-color: var(--color-secondary);
  color: white;
  padding: 2vh 1vw 2vh 4vw;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-85%)')};
  transition: transform 0.3s ease-in-out;
  box-shadow: 10px 0px 20px 9px rgba(0, 0, 0, 0.2);
  z-index: 9;
  @media (max-width: 768px) {
    display: none;
  }
`
const StepContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
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
    font-family: var(--font-secondary);
    font-size: var(--font-mid-medium);
  }
`

const blink = keyframes`
  0% { background-color:  var(--color-secondary);; }
  50% {  background-color: white; }
  100% { background-color:  var(--color-secondary);;}
`

const Circle = styled(Box).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['active'].includes(prop) && defaultValidatorFn(prop)
})`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  border: 2px solid white;
  margin-right: 10px;
  animation: ${({ active }) =>
    active
      ? css`
          ${blink} 3s infinite
        `
      : 'none'};
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
    !['top', 'height', 'left'].includes(prop) && defaultValidatorFn(prop)
})`
  width: 4px;
  background-color: var(--color-primary);
  height: ${({ height }) => `calc(6*${height}px )`};
  position: absolute;
  top: ${({ top, height }) => `${top - height}px`};
  left: ${({ left }) => `${left}px`};
  z-index: -1;
`
const PathWhite = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['top', 'height', 'step', 'left'].includes(prop) &&
    defaultValidatorFn(prop)
})`
  width: 4px;
  background-color: white;
  height: ${({ height, step }) => `calc(${step - 1}*${height}px )`};
  position: absolute;
  top: ${({ top, height }) => `${top - height}px`};
  left: ${({ left }) => `${left}px`};
  z-index: -1;
  transition: height 1s linear;
`

//Styles for adding open - close functionality in the process bar using an arrow
const ArrowDiv = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['isOpen'].includes(prop)
})`
  background-color: #ffffff36;
  border: 1px solid white;
  border-radius: 5px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  /* transition: transform 0.5s ease-in-out; */
`
const BackdropDiv = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['isOpen'].includes(prop)
})`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  height: 100vh;
  width: 100vw;
  /* overflow: visible; */
  z-index: 8;
  opacity: 0.3;
`
const ProcessBar = ({ step, setStep }) => {
  const steps = [
    'Personal Details',
    'Education',
    'Skills',
    'Projects or Internships',
    'Work Experience',
    'Achievements',
    'Additional Courses'
  ]
  // creating isOpen state to keep track of open and closed processBar
  const [isOpen, setIsOpen] = useState(false)

  // using useRef and useEffect hook to get the top of circle1 and circle2, difference between them is the height and then will mulitply it to get the height of the path
  const circle1Ref = useRef(null)
  const circle2Ref = useRef(null)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [height, setHeight] = useState(0)

  // update the positions of the circles when the component is mounted
  // create a function to update the positions of the circles whenever the screen size changes using event listener
  const updatePositions = () => {
    if (circle1Ref.current && circle2Ref.current) {
      const circle1Pos = circle1Ref.current.getBoundingClientRect().top
      const circle2Pos = circle2Ref.current.getBoundingClientRect().top
      const leftPos = circle1Ref.current.getBoundingClientRect().left
      setLeft(leftPos + 10)
      setTop(circle1Pos + 10)
      setHeight(circle2Pos - circle1Pos)
    }
  }
  useEffect(() => {
    updatePositions()
    // Add event listener for window resize
    window.addEventListener('resize', updatePositions)
    return () => window.removeEventListener('resize', updatePositions)
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Setting a timeout equal to the duration of the CSS transition to make sure the function runs after the bar has shown
      const timer = setTimeout(() => {
        updatePositions()
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [isOpen])
  return (
    <>
      <Sidebar isOpen={isOpen}>
        <StepContainerDiv>
          {steps.map((currentStep, index) => (
            <StepContainer
              key={index}
              onClick={() => {
                setStep(index + 1)
                console.log(step)
              }}
            >
              <Circle
                ref={index === 0 ? circle1Ref : index === 1 ? circle2Ref : null}
                active={step === index + 1}
              />
              <Step>
                <StepNumber>{`Step ${index + 1}`}</StepNumber>
                <StepName>{currentStep}</StepName>
              </Step>
            </StepContainer>
          ))}
        </StepContainerDiv>
        <PathBlack top={top} height={height} left={left} />
        <PathWhite top={top} height={height} step={step} left={left} />
        <ArrowDiv isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span
            className='material-symbols-outlined'
            style={{ padding: '15px 0', fontSize: '2rem' }}
          >
            chevron_right
          </span>
        </ArrowDiv>
        <Rectangle1 />
        <Rectangle2 />
        <Rectangle3 />
      </Sidebar>
      <BackdropDiv isOpen={isOpen}></BackdropDiv>
    </>
  )
}

export default ProcessBar
