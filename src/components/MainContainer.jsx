import { Box } from '@mui/material'
import React, { useRef, useState } from 'react'
import ProcessBar from './ProcessBar'
import PreviewBar from './PreviewBar'
import Form from './Form'
import styled from 'styled-components'

const OptionsContainer = styled.div`
  position: fixed;
  bottom: 5vh;
  right: 3vw;
  display: none;
  z-index: 999;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const OptionsCircle = styled.div`
  position: absolute;
  bottom: 2vh;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease-in-out;
  z-index: 5;
`
const CloseCircle = styled.div`
  position: absolute;
  bottom: 2vh;
  right: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease-in-out;
  z-index: 4;
`

// for visibility circle icon
const VisibilityCircle = styled.div`
  position: absolute;
  bottom: 2vh;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease-in-out;
  z-index: 3;
  opacity: 0;
`
const VisibilityOffCircle = styled.div`
  position: absolute;
  bottom: 2vh;
  right: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  opacity: 1;
`
const RouteCircle = styled.div`
  position: absolute;
  bottom: 2vh;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease-in-out;
  z-index: 3;
  opacity: 0;
`
const SlashDiv = styled.div`
  display: none;
  position: absolute;
  height: 36px;
  transform: rotateZ(120deg);
  width: 3px;
  background-color: white;
  transition: transform 0.3s ease-in-out;
  z-index: 4;
`
//btn for all icons
const Btn = styled.span`
  font-size: 2rem;
  color: white;
`

const MainContainer = ({ templateName }) => {
  const [step, setStep] = useState(1)
  const [isOpenPreviewBar, setIsOpenPreviewBar] = useState(false)
  const [isOpenProcessBar, setIsOpenProcessBar] = useState(false)
  const OptionsCircleRef = useRef(null)
  const CloseCircleRef = useRef(null)
  const VisibilityCircleRef = useRef(null)
  const VisibilityOffCircleRef = useRef(null)
  const RouteCircleRef = useRef(null)
  const SlashDivRef = useRef(null)

  // handle functions to handle click events
  const handleClick = () => {
    if (
      OptionsCircleRef.current &&
      CloseCircleRef.current &&
      VisibilityCircleRef.current &&
      VisibilityOffCircleRef.current &&
      RouteCircleRef.current
    ) {
      VisibilityCircleRef.current.style.opacity = '0'
      OptionsCircleRef.current.style.transform = 'rotateY(180deg)'
      setTimeout(() => {
        CloseCircleRef.current.style.display = 'flex'
        OptionsCircleRef.current.style.display = 'none'
        OptionsCircleRef.current.style.transform = 'rotateY(0deg)'
        VisibilityCircleRef.current.style.opacity = '1'
        RouteCircleRef.current.style.opacity = '1'
        VisibilityCircleRef.current.style.transform = 'translateX(-60px)'
        VisibilityOffCircleRef.current.style.transform = 'translateX(-60px)'
        RouteCircleRef.current.style.transform = 'translateX(-120px)'
      }, 200)
    }
  }

  const handleClickClose = () => {
    if (
      OptionsCircleRef.current &&
      CloseCircleRef.current &&
      VisibilityCircleRef.current &&
      VisibilityOffCircleRef.current
    ) {
      CloseCircleRef.current.style.transform = 'rotateY(180deg)'
      setTimeout(() => {
        OptionsCircleRef.current.style.display = 'flex'
        CloseCircleRef.current.style.display = 'none'
        CloseCircleRef.current.style.transform = 'rotateY(0deg)'
        VisibilityCircleRef.current.style.transform = 'translateX(0)'
        VisibilityOffCircleRef.current.style.transform = 'translateX(0)'
        RouteCircleRef.current.style.transform = 'translateX(0px) rotateY(0deg)'
        setIsOpenPreviewBar(false)
        setIsOpenProcessBar(false)
      }, 200)
      setTimeout(() => {
        VisibilityCircleRef.current.style.display = 'flex'
        VisibilityOffCircleRef.current.style.display = 'none'
        SlashDivRef.current.style.display = 'none'
      }, 400)
    }
  }

  const handleVisibilityClick = () => {
    setIsOpenPreviewBar(true)
    if (isOpenProcessBar) {
      setIsOpenProcessBar(false)
      if (SlashDivRef.current && RouteCircleRef.current) {
        RouteCircleRef.current.style.transform =
          'translateX(-120px) rotateY(0deg)'
        setTimeout(() => {
          SlashDivRef.current.style.display = 'none'
        }, 200)
      }
    }
    if (VisibilityCircleRef.current && VisibilityOffCircleRef.current) {
      VisibilityCircleRef.current.style.transform =
        'translateX(-60px) rotateY(180deg)'
      setTimeout(() => {
        VisibilityOffCircleRef.current.style.display = 'flex'
        VisibilityCircleRef.current.style.display = 'none'
        VisibilityCircleRef.current.style.transform =
          'translateX(-60px) rotateY(0deg)'
      }, 200)
    }
  }

  const handleClickRoute = () => {
    if (isOpenPreviewBar) {
      setIsOpenPreviewBar(false)
      if (VisibilityCircleRef.current && VisibilityOffCircleRef.current) {
        VisibilityOffCircleRef.current.style.transform =
          'translateX(-60px) rotateY(180deg)'
        setTimeout(() => {
          VisibilityOffCircleRef.current.style.display = 'none'
          VisibilityCircleRef.current.style.display = 'flex'
        }, 200)
      }
    }
    if (isOpenProcessBar) {
      setIsOpenProcessBar(false)
      if (
        SlashDivRef.current &&
        RouteCircleRef.current &&
        VisibilityCircleRef.current &&
        VisibilityOffCircleRef.current &&
        OptionsCircleRef.current &&
        CloseCircleRef.current
      ) {
        handleClickClose()
      }
    } else {
      setIsOpenProcessBar(true)
      if (SlashDivRef.current && RouteCircleRef.current) {
        RouteCircleRef.current.style.transform =
          'translateX(-120px) rotateY(360deg)'
        setTimeout(() => {
          SlashDivRef.current.style.display = 'block'
        }, 200)
      }
    }
  }
  return (
    <Box
      display='flex'
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'85vh'}
    >
      <ProcessBar
        step={step}
        setStep={setStep}
        isOpen={isOpenProcessBar}
        setIsOpen={setIsOpenProcessBar}
      />
      <Form step={step} setStep={setStep} templateName={templateName} />
      <PreviewBar
        isOpen={isOpenPreviewBar}
        setIsOpen={setIsOpenPreviewBar}
        templateName={templateName}
      />
      <OptionsContainer>
        <RouteCircle ref={RouteCircleRef} onClick={handleClickRoute}>
          <Btn className='material-symbols-outlined'>route</Btn>
          <SlashDiv ref={SlashDivRef}></SlashDiv>
        </RouteCircle>
        <VisibilityCircle
          ref={VisibilityCircleRef}
          onClick={handleVisibilityClick}
        >
          <Btn className='material-symbols-outlined'>visibility</Btn>
        </VisibilityCircle>
        <VisibilityOffCircle
          ref={VisibilityOffCircleRef}
          onClick={handleClickClose}
        >
          <Btn className='material-symbols-outlined'>visibility_off</Btn>
        </VisibilityOffCircle>
        <OptionsCircle ref={OptionsCircleRef} onClick={handleClick}>
          <Btn className='material-symbols-outlined'>more_horiz</Btn>
        </OptionsCircle>
        <CloseCircle ref={CloseCircleRef} onClick={handleClickClose}>
          <Btn className='material-symbols-outlined'>close</Btn>
        </CloseCircle>
      </OptionsContainer>
    </Box>
  )
}

export default MainContainer
