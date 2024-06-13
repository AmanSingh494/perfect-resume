import React, { useState } from 'react'
import { Button } from '@mui/material'
import HamburgerMenu from 'react-hamburger-menu'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import MenuIcon from '@mui/icons-material/Menu'
// Import other components you might need (e.g., Button, Link)
const LogoText = styled.p`
  font-size: var(--font-medium);
  color: 'white';
`
const AppBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-primary);
  color: white;
  padding: 12px 50px;
  box-shadow: 0px 0px 12px 1px #000000;
  gap: 7vw;
  z-index: 10;
  @media (max-width: 768px) {
    padding: 20px 14px;
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
  return (
    <AppBar>
      {/* <IconButton edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
        {/* <MenuIcon /> */}
      {/* </IconButton> */}
      <LogoText>Perfect Resume</LogoText>
      {/* Add your navigation links here */}
      <LinksContainer>
        <Button color='inherit'>Home</Button>
        <Button color='inherit'>About</Button>
        <Button color='inherit'>Contact</Button>
      </LinksContainer>
      <StyledHamburgerMenu
        color={'white'}
        isOpen={open}
        menuClicked={() => setOpen(!open)}
        width={18}
        height={15}
        strokeWidth={1}
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
