import { Button, Box, Container, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
const Form = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    about: ''
  })
  const [eduCount, setEduCount] = useState(3)
  const [edu, setEdu] = useState(Array(eduCount).fill(''))
  const [skillCount, setSkillCount] = useState(3)
  const [skill, setSkill] = useState(Array(skillCount).fill(''))
  const [workCount, setWorkCount] = useState(2)
  const [work, setWork] = useState(Array(skillCount).fill(''))
  const [linkCount, setLinkCount] = useState(3)
  const [links, setLink] = useState(Array(skillCount).fill(''))
  const [achievementCount, setAchievementsCount] = useState(1)
  const [achievements, setAchievements] = useState(Array(skillCount).fill(''))

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
          about: formData.about,
          achievements,
          edu,
          skill,
          work,
          links
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
  const handleInputChange = (index, e, _state, _stateChanger) => {
    const values = [..._state]
    values[index] = e.target.value
    _stateChanger(values)
  }

  const handleAddClick = (count, countChanger, _state, _stateChanger) => {
    countChanger(count + 1)
    _stateChanger([..._state, ''])
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
                <input
                  type='file'
                  name='imageUpload'
                  accept='image/jpg, image/png'
                />
                <label for='imageUpload' />
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
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Box margin={1}>
                <h1>Education</h1>
              </Box>
              {Array.from({ length: eduCount }, (_, index) => (
                <Box margin={1}>
                  <TextField
                    label='Education'
                    key={index}
                    value={edu[index] || ''}
                    onChange={(event) =>
                      handleInputChange(index, event, edu, setEdu)
                    }
                  />
                </Box>
              ))}
              <Box display={'flex'}>
                <Box margin={1}>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() =>
                      handleAddClick(eduCount, setEduCount, edu, setEdu)
                    }
                  >
                    Add input
                  </Button>
                </Box>
                <Box margin={1}>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={nextStep}
                  >
                    Next
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
          {step === 3 && (
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <h1>What Skills do you have?</h1>
              <Box>
                {Array.from({ length: skillCount }, (_, index) => (
                  <Box margin={1}>
                    <TextField
                      label='Skill'
                      key={index}
                      value={skill[index] || ''}
                      onChange={(event) =>
                        handleInputChange(index, event, skill, setSkill)
                      }
                    />
                  </Box>
                ))}
                <Box display={'flex'}>
                  <Box margin={1}>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() =>
                        handleAddClick(
                          skillCount,
                          setSkillCount,
                          skill,
                          setSkill
                        )
                      }
                    >
                      Add input
                    </Button>
                  </Box>
                  <Box margin={1}>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={nextStep}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          {step === 4 && (
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Box margin={1} textAlign={'center'}>
                <h1>Show Your Work Experience</h1>
              </Box>
              <Box>
                {Array.from({ length: workCount }, (_, index) => (
                  <Box margin={1}>
                    <TextField
                      label='Work'
                      key={index}
                      value={work[index] || ''}
                      onChange={(event) =>
                        handleInputChange(index, event, work, setWork)
                      }
                    />
                  </Box>
                ))}
                <Box display={'flex'}>
                  <Box margin={1}>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() =>
                        handleAddClick(workCount, setWorkCount, work, setWork)
                      }
                    >
                      Add input
                    </Button>
                  </Box>
                  <Box margin={1}>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={nextStep}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          {step === 5 && (
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Box margin={1} textAlign={'center'}>
                <h1>Have you achieved anything?</h1>
              </Box>
              <Box>
                {Array.from({ length: achievementCount }, (_, index) => (
                  <Box margin={1}>
                    <TextField
                      label='Achievement'
                      key={index}
                      value={achievements[index] || ''}
                      onChange={(event) =>
                        handleInputChange(
                          index,
                          event,
                          achievements,
                          setAchievements
                        )
                      }
                    />
                  </Box>
                ))}
                <Box display={'flex'}>
                  <Box margin={1}>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() =>
                        handleAddClick(
                          achievementCount,
                          setAchievementsCount,
                          achievements,
                          setAchievements
                        )
                      }
                    >
                      Add input
                    </Button>
                  </Box>
                  <Box margin={1}>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={nextStep}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          {step === 6 && (
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Box margin={1} textAlign={'center'}>
                <h1>How to connect to you?</h1>
              </Box>
              <Box>
                {Array.from({ length: linkCount }, (_, index) => (
                  <Box margin={1}>
                    <TextField
                      label='Links'
                      key={index}
                      value={links[index] || ''}
                      onChange={(event) =>
                        handleInputChange(index, event, links, setLink)
                      }
                    />
                  </Box>
                ))}
                <Box display={'flex'}>
                  <Box margin={1}>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() =>
                        handleAddClick(linkCount, setLinkCount, links, setLink)
                      }
                    >
                      Add input
                    </Button>
                  </Box>
                  <Box margin={1}>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </form>
      </Box>
    </Container>
  )
}

export default Form
