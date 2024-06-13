import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import interviewImage from '../assets/img/interview-image.jpg'
import bagOpen from '../assets/img/bag-open.jpg'
import bagClose from '../assets/img/bag-close.jpg'
import paper from '../assets/img/parchment-yellow.png'

const LandingPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledBackground = styled.img`
  position: absolute;
  top: 22vh;
  opacity: 0.4;
  z-index: -1;
  transition: all 0.3s linear;
`
const PrimaryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 90vh;
  transition: all 0.3s linear;
`
const PrimeHeading = styled.h1`
  font-size: var(--font-ex-large);
  font-family: var(--font-primary);
  font-weight: var(--font-mid-bold);
  color: var(--color-primary);
  text-align: center;
`
const PrimarySubHeading = styled.h3`
  font-size: var(--font-medium);
  font-family: var(--font-primary);
  font-weight: 670;
  color: var(--color-primary);
  text-align: center;
`

//Reason section
const ReasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh 0;
  gap: 20px;
`
const ReasonHeading = styled.h1`
  font-size: var(--font-large);
  font-family: var(--font-primary);
  font-weight: var(--font-mid-bold);
  color: var(--color-primary);
  text-align: center;
  transition: all 0.3s linear;
  transform: translateX(-100px);
  opacity: 0;
`
const BagOpenDiv = styled.div`
  position: absolute;
  top: 40px;
`
const BagCloseDiv = styled.div`
  position: absolute;
  top: 40px;
  transition: all 0.3s linear;
`
const AnimationDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const PaperDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65vh;
  width: 30vw;
  transform: scale(0);
  transition: all 1s linear;
`
const PaperTextDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
const PaperText = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  /* font-size: var(--font-medium); */
  z-index: -4;
  font-family: var(--font-primary);
  gap: 5px;
`
const PaperImg = styled.img`
  position: absolute;
  height: 65vh;
  width: 30vw;
  top: 0;
  z-index: -5;
`

//Examples Section
const ExamplesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh 0;
  gap: 20px;
`
const ExamplesHeading = styled.h1`
  font-size: var(--font-large);
  font-family: var(--font-primary);
  font-weight: var(--font-mid-bold);
  color: var(--color-primary);
  text-align: center;
`
const ExamplesImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LandingPage = () => {
  //setting up refs for manipulating the dom
  const bagOpenRef = useRef(null)
  const bagCloseRef = useRef(null)
  const paperDivRef = useRef(null)
  const primartyTextRef = useRef(null)
  const reasonContainerRef = useRef(null)
  const reasonHeadingRef = useRef(null)
  const lastScrollYRef = useRef(0) //crete a ref to store the last scroll position because a state variable may cause problems on re-renders
  useEffect(() => {
    const scrollTextAnimation = () => {
      console.log('scroll animation')
      if (reasonContainerRef.current && reasonHeadingRef.current) {
        console.log('ref current present')
        const reasonContainerTop =
          reasonContainerRef.current.getBoundingClientRect().top
        const reasonContainerBottom =
          reasonContainerRef.current.getBoundingClientRect().bottom
        const scrollPos = window.scrollY

        if (
          scrollPos >= reasonContainerTop &&
          scrollPos <= reasonContainerBottom
        ) {
          console.log('scroll position in the range of reason container')
          const direction =
            window.scrollY > lastScrollYRef.current ? 'down' : 'up'
          lastScrollYRef.current = window.scrollY
          if (direction === 'down') {
            console.log('down')
            reasonHeadingRef.current.style.animation =
              'textSlideShow 0.5s linear forwards'
          } else {
            console.log('up')
            reasonHeadingRef.current.style.animation =
              'textSlideHide 0.5s linear forwards'
          }
        }
      }
    }
    window.addEventListener('scroll', scrollTextAnimation)
    const scrollTimer = setTimeout(() => {
      // Scroll to the bottom of the page
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth' // For a smooth scroll
      })
    }, 2000) // 2000 milliseconds = 2 seconds

    //timer for bag opening animation effect using useref hook

    const openTimer = setTimeout(() => {
      if (bagCloseRef.current) {
        bagCloseRef.current.style.opacity = 0
      }
    }, 3000)

    //animation for scaling the paper
    const paperDivTimer = setTimeout(() => {
      if (paperDivRef.current) {
        paperDivRef.current.style.animation =
          'movePaper 1s ease-in-out forwards'
      }
    }, 4000)

    // Cleanup the timer if the component unmounts before the timer fires
    return () => {
      clearTimeout(scrollTimer)
      clearTimeout(openTimer)
      clearTimeout(paperDivTimer)
      window.removeEventListener('scroll', scrollTextAnimation)
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <LandingPageDiv>
      <StyledBackground src={interviewImage} />
      <PrimaryText ref={primartyTextRef}>
        <PrimeHeading>WELCOME TO PERFECT RESUME</PrimeHeading>
        <PrimarySubHeading>RESUME MADE EASY</PrimarySubHeading>
      </PrimaryText>

      {/* Reason Section */}
      <ReasonContainer ref={reasonContainerRef}>
        <ReasonHeading ref={reasonHeadingRef}>
          WHY TO USE PERFECT RESUME ?
        </ReasonHeading>
        <AnimationDiv>
          <BagOpenDiv ref={bagOpenRef}>
            <img src={bagOpen} alt='bag that is open' />
          </BagOpenDiv>
          <BagCloseDiv ref={bagCloseRef}>
            <img src={bagClose} alt='bag that is close' />
          </BagCloseDiv>
          <PaperDiv ref={paperDivRef}>
            <PaperTextDiv>
              <PaperText>
                <span class='material-symbols-outlined'>nearby</span>
                <p>NO SUBSCRIPTION REQUIRED</p>
              </PaperText>
              <PaperText>
                <span class='material-symbols-outlined'>nearby</span>
                <p>NO CLICK BAITS</p>
              </PaperText>
              <PaperText>
                <span class='material-symbols-outlined'>nearby</span>
                <p>SAVES TIME AND EFFORT</p>
              </PaperText>
              <PaperText>
                <span class='material-symbols-outlined'>nearby</span>
                <p>EASY TO USE</p>
              </PaperText>
              <PaperText>
                <span class='material-symbols-outlined'>nearby</span>
                <p>ONE CLICK DOWNLOAD</p>
              </PaperText>
            </PaperTextDiv>
            <PaperImg src={paper} alt='white-parchment with text on it' />
          </PaperDiv>
        </AnimationDiv>
      </ReasonContainer>

      {/* Examples Section */}
      <ExamplesContainer>
        <ExamplesHeading>A FEW EXAMPLES</ExamplesHeading>
        <ExamplesImgDiv>
          {/* <img src={interviewImage} alt='interview' />
          <img src={interviewImage} alt='interview' />
          <img src={interviewImage} alt='interview' /> */}
        </ExamplesImgDiv>
      </ExamplesContainer>
    </LandingPageDiv>
  )
}

export default LandingPage
