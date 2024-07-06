import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import interviewImage from '../assets/img/interview-image.jpg'
import bagOpen from '../assets/img/bag-open.jpg'
import bagClose from '../assets/img/bag-close.jpg'
import folderImg from '../assets/img/folderImg.png'
import resumeExample1 from '../assets/img/resume-example1.jpg'
import resumeExample2 from '../assets/img/resume-example2.jpg'
import paper from '../assets/img/paper.png'
import landingPageBackgroundImg from '../assets/img/landing-page-background-img.png'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const LandingPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledBackground = styled.img`
  position: absolute;
  top: 13vh;
  opacity: 0.17;
  z-index: -1;
  /* max-width: 70vw; */
  height: 80vh;
  @media (max-width: 768px) {
    top: 32vh;
    height: 40vh;
    display: none;
  }
`
const PrimaryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  padding: 0 10px;
  @media (max-width: 768px) {
    align-items: flex-start;
    gap: 10px;
  }
`
const PrimeHeading = styled.h1`
  font-size: var(--font-ex-large);
  font-family: var(--font-primary);
  font-weight: var(--font-ex-bold);
  color: var(--color-primary);
  text-align: center;
  @media (max-width: 768px) {
    text-align: start;
    font-size: 3rem;
    font-family: var(--font-secondary);
  }
`
const PrimarySubHeading = styled.h3`
  font-size: var(--font-medium);
  font-family: var(--font-secondary);
  font-weight: 670;
  color: var(--color-primary);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    text-align: end;
    align-self: flex-end;
    background-color: var(--color-primary);
    color: white;
    padding: 5px;
    border-radius: 5px;
  }
`
const PrimaryDescription = styled.h4`
  font-family: var(--font-tertiary);
  font-size: var(--font-mid-medium);
  color: #636363;
  text-align: center;
  width: 70vw;
  line-height: 17px;
  padding: 30px 0;
  font-weight: var(--font-mid-bold);
  @media (max-width: 768px) {
    padding: 5px 0;
    width: 90vw;
    text-align: start;
    font-size: 1rem;
    line-height: 17px;
    letter-spacing: 0.3px;
  }
`
//Reason section
const ReasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20vh 0;
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
// const BagOpenDiv = styled.div`
//   position: absolute;
//   top: 40px;
//   transition: all 0.3s linear;
// `
// const BagCloseDiv = styled.div`
//   position: absolute;
//   top: 40px;
//   transition: all 0.3s linear;
// `
const FolderImg = styled.img`
  height: 200px;
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
  width: 30vw;
  transform: scale(0);
  transition: all 1s linear;
  height: 72vh;
  @media (max-width: 768px) {
    width: 80vw;
    height: 55vh;
  }
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
  font-size: 0.9rem;
  z-index: -4;
  font-family: var(--font-primary);
  gap: 5px;
`
const PaperImg = styled.img`
  position: absolute;
  height: 72vh;
  width: 33vw;
  top: 0;
  z-index: -5;
  @media (max-width: 768px) {
    width: 95vw;
    height: 55vh;
  }
`

//Examples Section
const ExamplesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15vh 0;
  gap: 35px;
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
  gap: 100px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`
const ExampleImg = styled.img`
  height: 300px;
  border: 2px solid var(--color-primary);
  transition: all 0.3s linear;
  z-index: 5;
  &:hover {
    transform: scale(1.8);
    position: relative;
    top: 0px;
  }
`

//usage guidelines section
const UsageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const UsageHeading = styled.h1`
  font-size: var(--font-large);
  font-family: var(--font-primary);
  font-weight: var(--font-mid-bold);
  color: var(--color-primary);
  text-align: center;
`
const UsagePointsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 50vw;
`
const UsagePoints = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  /* font-size: var(--font-medium); */
  font-family: var(--font-primary);
  font-weight: var(--font-mid-bold);
  color: var(--color-primary);
  text-align: center;
`

// Feedback Section
const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const FeedbackHeading = styled.h1`
  font-size: var(--font-large);
  font-family: var(--font-primary);
  font-weight: var(--font-mid-bold);
  color: var(--color-primary);
  text-align: center;
`

const StyledButton = styled(Button)`
  && {
    background: var(--color-tertiary);
    color: white;
    &:hover {
      background: var(--color-quaternary);
    }
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`
const LandingPage = () => {
  //setting up refs for manipulating the dom
  // const bagOpenRef = useRef(null)
  // const bagCloseRef = useRef(null)
  const paperDivRef = useRef(null)
  const primartyTextRef = useRef(null)
  const reasonContainerRef = useRef(null)
  const reasonHeadingRef = useRef(null)
  const lastScrollYRef = useRef(0) //crete a ref to store the last scroll position because a state variable may cause problems on re-renders
  useEffect(() => {
    const scrollTextAnimation = () => {
      if (reasonContainerRef.current && reasonHeadingRef.current) {
        const reasonContainerTop =
          reasonContainerRef.current.getBoundingClientRect().top
        const reasonContainerBottom =
          reasonContainerRef.current.getBoundingClientRect().bottom
        const scrollPos = window.scrollY

        if (
          scrollPos >= reasonContainerTop &&
          scrollPos <= reasonContainerBottom
        ) {
          const direction =
            window.scrollY > lastScrollYRef.current ? 'down' : 'up'
          // const scrollMeasure = Math.abs(
          //   window.scrollY - lastScrollYRef.current
          // )
          lastScrollYRef.current = window.scrollY
          if (direction === 'down') {
            reasonHeadingRef.current.style.animation =
              'textSlideShow 0.5s linear forwards'

            paperDivRef.current.style.animation =
              'movePaper 1s ease-in-out forwards'

            // bagCloseRef.current.style.opacity = 0 bag animation replaced with folder
            // bagOpenRef.current.style.opacity = 1
          } else {
            reasonHeadingRef.current.style.animation =
              'textSlideHide 0.5s linear forwards'
            paperDivRef.current.style.animation =
              'movePaperBack 1s ease-in-out forwards'
            setTimeout(() => {
              // bagCloseRef.current.style.opacity = 1
              // bagOpenRef.current.style.opacity = 0
            }, 500)
          }
        }
      }
    }

    window.addEventListener('scroll', scrollTextAnimation)
    // const scrollTimer = setTimeout(() => {
    //   // Scroll to the bottom of the page
    //   window.scrollTo({
    //     top: window.innerHeight,
    //     behavior: 'smooth' // For a smooth scroll
    //   })
    // }, 2000) // 2000 milliseconds = 2 seconds

    //timer for bag opening animation effect using useref hook

    // const openTimer = setTimeout(() => {
    //   if (bagCloseRef.current) {
    //     bagCloseRef.current.style.opacity = 0
    //   }
    // }, 3000)

    //animation for scaling the paper
    const paperDivTimer = setTimeout(() => {
      if (paperDivRef.current) {
        paperDivRef.current.style.animation =
          'movePaper 1s ease-in-out forwards'
      }
    }, 4000)

    // Cleanup the timer if the component unmounts before the timer fires
    return () => {
      // clearTimeout(scrollTimer)
      // clearTimeout(openTimer)
      clearTimeout(paperDivTimer)
      window.removeEventListener('scroll', scrollTextAnimation)
    }
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <LandingPageDiv>
      <StyledBackground src={landingPageBackgroundImg} />
      <PrimaryText ref={primartyTextRef}>
        <PrimeHeading>
          WELCOME <p>TO</p> PERFECT RESUME
        </PrimeHeading>
        <PrimarySubHeading>RESUME MADE EASY</PrimarySubHeading>
        <PrimaryDescription>
          Perfect Resume is a user-friendly web app that creates professional
          resumes effortlessly. Simply fill out intuitive forms, and our service
          generates a polished resume for you—all at no cost. Enjoy a seamless
          experience with customizable templates, ensuring your resume stands
          out. Start building your career success today, easily and for free!
        </PrimaryDescription>
        <StyledButton>
          <Link style={{ color: 'white' }} to='/create-resume'>
            GET STARTED
          </Link>
        </StyledButton>
      </PrimaryText>

      {/* Reason Section */}
      <ReasonContainer ref={reasonContainerRef}>
        <ReasonHeading ref={reasonHeadingRef}>
          WHY TO USE PERFECT RESUME ?
        </ReasonHeading>
        <AnimationDiv>
          <FolderImg src={folderImg} alt='cartoon of a folder'></FolderImg>
          <PaperDiv ref={paperDivRef}>
            <PaperTextDiv>
              <PaperText>
                <span className='material-symbols-outlined'>nearby</span>
                <p>NO SUBSCRIPTION REQUIRED</p>
              </PaperText>
              <PaperText>
                <span className='material-symbols-outlined'>nearby</span>
                <p>NO CLICK BAITS</p>
              </PaperText>
              <PaperText>
                <span className='material-symbols-outlined'>nearby</span>
                <p>SAVES TIME AND EFFORT</p>
              </PaperText>
              <PaperText>
                <span className='material-symbols-outlined'>nearby</span>
                <p>EASY TO USE</p>
              </PaperText>
              <PaperText>
                <span className='material-symbols-outlined'>nearby</span>
                <p>ONE CLICK DOWNLOAD</p>
              </PaperText>
              <PaperText>
                <span className='material-symbols-outlined'>nearby</span>
                <p>NO WATERMARK ON RESUME</p>
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
          <a href={resumeExample1} target='_blank' rel='noopener noreferrer'>
            <ExampleImg src={resumeExample1} alt='resumeExample1' />
          </a>
          <a href={resumeExample2} target='_blank' rel='noopener noreferrer'>
            <ExampleImg src={resumeExample2} alt='resumeExample2' />
          </a>
        </ExamplesImgDiv>
      </ExamplesContainer>

      {/* Usage Guidelines Section */}
      {/* <UsageContainer>
        <UsageHeading>HOW TO GET THE MOST OUT OF PERFECT RESUME ?</UsageHeading>
        <UsagePointsDiv>
          <UsagePoints>
            <span className='material-symbols-outlined'>nearby</span>
            <p>
              MAKE SURE TO BE READY WITH ALL YOUR PERSONAL AND ACADEMIC DETAILS,
              YOUR WORK EXPERIENCE AND WORK EXPERIENCE
            </p>
          </UsagePoints>
          <UsagePoints>
            <span className='material-symbols-outlined'>nearby</span>
            <p>SELECT A TEMPLATE</p>
          </UsagePoints>
          <UsagePoints>
            <span className='material-symbols-outlined'>nearby</span>
            <p>DOWNLOAD YOUR RESUME</p>
          </UsagePoints>
        </UsagePointsDiv>
      </UsageContainer> */}

      {/* Feedback Section */}
      {/* <FeedbackContainer>
        <FeedbackHeading>YOUR FEEDBACK IS VALUABLE</FeedbackHeading>
      </FeedbackContainer> */}
    </LandingPageDiv>
  )
}

export default LandingPage
