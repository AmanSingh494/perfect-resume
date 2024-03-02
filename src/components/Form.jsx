import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
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
          phone: formData.phone
        })
      })
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'resume.pdf' // Set desired filename
      link.click()

      // Revoke the temporary URL to avoid memory leaks
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Name'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          label='E-mail'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          label='Phone'
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Button type='submit' variant='contained'>
          Create Resume
        </Button>
      </form>
    </div>
  )
}

export default Form
