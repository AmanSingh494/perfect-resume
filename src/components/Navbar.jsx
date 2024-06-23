import React, { useState } from 'react'
import { Button } from '@mui/material'
import HamburgerMenu from 'react-hamburger-menu'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import perfectResumeLogo from '../assets/img/perfect-resume-logo.png'
// import MenuIcon from '@mui/icons-material/Menu'
const NavBtn = styled(Button)`
  && {
    font-family: var(--font-secondary);
    font-weight: 650;
  }
`
const LogoImg = styled.img`
  height: 45px;
  @media (max-width: 768px) {
    height: 55px;
  }
`
const AppBar = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['current'].includes(prop)
})`
  position: ${({ current }) => (current === `home` ? `relative` : `sticky`)};
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ current }) =>
    current === `home` ? `var(--color-primary)` : `white`};
  background-color: ${({ current }) =>
    current === `home` ? `transparent` : `var(--color-primary)`};
  padding: 8px 50px;
  gap: 7vw;
  z-index: 10;
  box-shadow: ${({ current }) =>
    current === `home` ? `none` : `0px 0px 12px 1px #000000`};
  @media (max-width: 768px) {
    padding: 10px 14px;
    align-items: center;
  }
`
const LinksContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
    position: absolute;
    top: 10px;
    right: 0px;
    flex-direction: column;
  }
`
const StyledHamburgerMenu = styled(HamburgerMenu)`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`
const StyledButton = styled(Button)`
  && {
    background: var(--color-tertiary);
    color: white;
    &:hover {
      background: var(--color-quaternary);
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`
const Navbar = ({ current }) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <AppBar current={current}>
      <Link to={'/'}>
        <LogoImg src={perfectResumeLogo} alt='logo' />
      </Link>
      <LinksContainer>
        <NavBtn
          color='inherit'
          onClick={() => {
            navigate('/')
          }}
        >
          Home
        </NavBtn>
        <NavBtn color='inherit'>About</NavBtn>
        <NavBtn color='inherit'>Contact</NavBtn>
      </LinksContainer>
      <StyledHamburgerMenu
        color={current === 'home' ? 'black' : 'white'}
        isOpen={open}
        menuClicked={() => setOpen(!open)}
        width={18}
        height={15}
        strokeWidth={3}
        rotate={0}
        borderRadius={0}
        animationDuration={0.5}
      />
      <StyledButton>
        <Link style={{ color: 'white' }} to='/create-resume'>
          Create Resume
        </Link>
      </StyledButton>
    </AppBar>
  )
}

export default Navbar
