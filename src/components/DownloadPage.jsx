import React, { useState } from 'react'
import { Box, Typography, Button, CircularProgress } from '@mui/material'

const DownloadPage = ({ status, setIsSubmitted, setDownloadStatus }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='80vh'
      gap='20px'
    >
      <Typography variant='h6'>{status}</Typography>
      {status === 'Hang on, Your Resume is on the way' && <CircularProgress />}
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap='10px'
      >
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            setIsSubmitted(false)
          }}
        >
          Make Changes
        </Button>
        <Button
          variant='contained'
          color='primary'
          disabled={
            status === 'Successfully Generated Your Resume' ? false : true
          }
          onClick={() => {
            setDownloadStatus(true)
          }}
        >
          Download
        </Button>
      </Box>
    </Box>
  )
}
export default DownloadPage
