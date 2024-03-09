import { Button, Box, Container, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
const Form = () => {
  const [step, setStep] = useState(2)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    about: ''
  })
  useEffect(() => {
    console.log(step)
  }, [step])
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          about: formData.about
        })
      })
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'resume.pdf' // Set desired filename
      // link.click()

      // Revoke the temporary URL to avoid memory leaks
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.log(err)
    }
  }
  const nextStep = () => {
    setStep((current) => current + 1)
  }
  const setName = (e) => {
    setFormData({ ...formData, name: e.target.value })
  }
  const setEmail = (e) => {
    setFormData({ ...formData, email: e.target.value })
  }
  const setPhone = (e) => {
    setFormData({ ...formData, phone: e.target.value })
  }
  const setAddress = (e) => {
    setFormData({ ...formData, address: e.target.value })
  }
  const setAbout = (e) => {
    setFormData({ ...formData, about: e.target.value })
  }
  return (
    <Container maxWidth='xs'>
      <Box marginTop={4}>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          {step === 1 && (
            <Box
              display={'flex'}
              alignItems={'center'}
              flexDirection={'column'}
            >
              <h1>Personal Details</h1>
              <Box margin={1}>
                <TextField required id='name' label='Name' onChange={setName} />
              </Box>
              <Box margin={1}>
                <TextField
                  required
                  id='email'
                  label='Email'
                  type='email'
                  onChange={setEmail}
                />
              </Box>
              <Box margin={1}>
                <TextField
                  required
                  id='phone'
                  label='Phone Number'
                  type='tel'
                  onChange={setPhone}
                />
              </Box>
              <Box margin={1}>
                <TextField
                  required
                  id='address'
                  label='Address'
                  onChange={setAddress}
                />
              </Box>
              <Box margin={1}>
                <TextField
                  required
                  id='about'
                  label='About Me'
                  onChange={setAbout}
                />
              </Box>
              <Box margin={1}>
                <Button variant='contained' color='primary' onClick={nextStep}>
                  Next
                </Button>
              </Box>
            </Box>
          )}
          {step === 2 && (
            <>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <h1>Education</h1>
                <Box margin={1}>
                  <TextField
                    required
                    id='school'
                    label='Enter Education Qualification'
                  />
                </Box>
              </Box>
            </>
          )}
        </form>
      </Box>
    </Container>
  )
}

export default Form
