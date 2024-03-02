import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Button } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu'
// Import other components you might need (e.g., Button, Link)

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar sx={{ backgroundColor: '#0C359E' }}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' }
          }}
        >
          Perfect Resume
        </Typography>
        {/* Add your navigation links here */}
        <Button color='inherit'>Home</Button>
        <Button color='inherit'>About</Button>
        <Button color='inherit'>Contact</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
