import React, { useState } from 'react'
import styled from 'styled-components'
import Temp1 from './Temp1'
import { useSelector } from 'react-redux'

const PreviewBarDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop)
})`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 2vh 4vw 2vh 1vw;
  right: 0;
  top: 60px;
  gap: 20px;
  height: calc(100vh - 60px);
  width: 36vw;
  box-sizing: border-box;
  background-color: var(--color-secondary);
  color: white;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(87%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  @media (max-width: 768px) {
    /* display: none; */
    justify-content: center;
    width: 100vw;
    padding: 2vh 4vw 2vh 2vw;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
  }
`
const ArrowDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop)
})`
  background-color: #ffffff36;
  border: 1px solid white;
  border-radius: 5px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0)' : 'rotate(180deg)')};
  font-size: 2rem;
  /* transition: transform 0.5s ease-in-out; */
  @media (max-width: 768px) {
    display: none;
  }
`
const ArrowDivSpan = styled.span`
  cursor: pointer;
  font-size: 2rem;
  padding: 15px 0;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
const PreviewBar = ({ isOpen, setIsOpen }) => {
  const personalDetails = useSelector((state) => state.personalDetails)
  const edu = useSelector((state) => state.edu)
  const skill = useSelector((state) => state.skills)
  const work = useSelector((state) => state.work)
  const projects = useSelector((state) => state.projects)
  const course = useSelector((state) => state.additionalCourse)
  const achievements = useSelector((state) => state.achievements)

  const formData = {
    personalDetails,
    edu,
    skill,
    work,
    projects,
    course,
    achievements
  }
  return (
    <PreviewBarDiv isOpen={isOpen}>
      <ArrowDiv isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <ArrowDivSpan className='material-symbols-outlined'>
          chevron_right
        </ArrowDivSpan>
      </ArrowDiv>
      <Temp1 formData={formData} />
    </PreviewBarDiv>
  )
}

export default PreviewBar
