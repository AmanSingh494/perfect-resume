import React, { useState } from 'react'
import styled from 'styled-components'
import Temp1 from './Temp1'

const PreviewBarDiv = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['isOpen'].includes(prop)
})`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 2vh 4vw 2vh 1vw;
  right: 0;
  top: 60px;
  display: flex;
  gap: 20px;
  height: calc(100vh - 60px);
  background-color: var(--color-secondary);
  color: white;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(87%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  @media (max-width: 768px) {
    display: none;
  }
`
const PreviewImage = styled.img``
const ArrowDiv = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['isOpen'].includes(prop)
})`
  background-color: #ffffff36;
  border: 1px solid white;
  border-radius: 5px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0)' : 'rotate(180deg)')};
  /* transition: transform 0.5s ease-in-out; */
`
const formData = {
  personalDetails: [
    {
      personName: 'Aman Singh',
      email: 'amanforwork1@gmail.com',
      phone: '09717599515',
      address: 'B -475 b Patel Nagar 2nd',
      dob: '2024-06-13',
      about:
        'bkuhajsav bjhv svhjbasnvuasio vjasvo asjvn asiuv asvkasn vasijon nascknc ashrb cascr asjrc nnaslmcnas efsauf skanc asjcnA UCEAS ',
      linktree: 'DFVZSDV SDDSV'
    }
  ],
  achievements: [
    {
      name: 'ZN GZN ZZ',
      event: 'GNZ',
      organiser: 'ZNZDGNDGN',
      year: 'BGFNNGD'
    },
    {
      name: ' BSDD GS',
      event: 'DZHBD',
      organiser: 'DGBDZB',
      year: 'ZDNGZXN'
    },
    {
      name: 'ZGN ZDNB',
      event: 'ZDBZDB',
      organiser: 'ZDBGZDB',
      year: 'ZBDDZD'
    }
  ],
  edu: [
    {
      course: 'GBSDRGBSZD',
      institution: 'ZGVDSZGVZ',
      year: 'ZB',
      marks: 'F'
    },
    {
      course: 'ZDBGGZBG',
      institution: 'ZDFZ',
      year: 'ZGB',
      marks: 'RZGB'
    },
    {
      course: 'ZDZBGZBGGBV',
      institution: 'DFBGDTJN',
      year: 'YF,MU,',
      marks: 'JMD'
    }
  ],
  skill: [
    { skill: 'ZSDFBZDBG', level: 'ZDBZBD' },
    { skill: 'ZDBDZB', level: 'ZDBDZ' },
    { skill: 'ZDBDZN', level: 'dgGTNDX' },
    { skill: 'ZDNGZ MZZD', level: 'NDZN ZD' }
  ],
  projects: [
    {
      company: 'DGNZ BZ',
      position: 'DZGN ZG',
      start: 'DGN ',
      end: 'ZGN DZ',
      exp: 'N DZ'
    },
    {
      company: 'DNGDZNG',
      position: 'DZN ZDN',
      start: 'DZN ZD',
      end: 'N Z',
      exp: 'DNG ZDG'
    }
  ],
  work: [
    {
      company: 'DGNZNZ',
      position: 'ZDGNGZDN',
      start: 'ZDN ',
      end: 'ZDNG ZD',
      exp: 'GZDN GDZ'
    }
  ],
  course: [
    { course: 'NZDNFSG', duration: 'N ZDGZXVV', exp: 'N ZG ZCD' },
    { course: 'ZNG ADBADN', duration: 'DNANZDG', exp: 'ZDGV G' }
  ]
}
const PreviewBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <PreviewBarDiv isOpen={isOpen}>
      <ArrowDiv isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span
          className='material-symbols-outlined'
          style={{ padding: '15px 0', fontSize: '2rem' }}
        >
          chevron_right
        </span>
      </ArrowDiv>
      <Temp1 formData={formData} />
    </PreviewBarDiv>
  )
}

export default PreviewBar
