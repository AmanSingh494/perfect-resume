import React, { useState } from 'react'
import { Box, Typography, Button, CircularProgress } from '@mui/material'
import styled from 'styled-components'
const DownloadPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  gap: 20px;
  text-align: center;
  padding: 0 240px;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`
const DownloadPage = ({
  status,
  setResStatus,
  setIsSubmitted,
  setDownloadStatus
}) => {
  return (
    <DownloadPageBox>
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
            setResStatus('Hang on, Your Resume is on the way')
            setDownloadStatus(false)
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
    </DownloadPageBox>
  )
}
export default DownloadPage
