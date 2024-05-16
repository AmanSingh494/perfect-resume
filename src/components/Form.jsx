import { Button, Box, Container, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DownloadPage from './DownloadPage.jsx'

const Heading = styled.p`
  font-size: var(--font-large);
  font-family: var(--font-primary);
  font-weight: 600;
`
const NavigationButtons = styled.div`
  display: flex;
  gap: 10px;
`
const StyledButton = styled(Button)`
  && {
    background: var(--color-tertiary);
    color: white;
    &:hover {
      background: var(--color-quaternary);
    }
  }
`
const Form = ({ step, setStep }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [resStatus, setResStatus] = useState(
    'Hang on, Your Resume is on the way'
  )
  const [downloadStatus, setDownloadStatus] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState(null)
  const [personalDetails, setPersonalDetails] = useState(
    Array.from({ length: 1 }, () => ({}))
  )
  const [eduCount, setEduCount] = useState(1)
  const [edu, setEdu] = useState(Array.from({ length: eduCount }, () => ({})))
  const [skillCount, setSkillCount] = useState(1)
  const [skill, setSkill] = useState(
    Array.from({ length: skillCount }, () => ({}))
  )
  const [workCount, setWorkCount] = useState(1)
  const [work, setWork] = useState(
    Array.from({ length: workCount }, () => ({}))
  )
  const [projectCount, setProjectCount] = useState(1)
  const [projects, setProjects] = useState(
    Array.from({ length: projectCount }, () => ({}))
  )
  const [courseCount, setCourseCount] = useState(1)
  const [course, setCourse] = useState(
    Array.from({ length: courseCount }, () => ({}))
  )
  const [achievementCount, setAchievementsCount] = useState(1)
  const [achievements, setAchievements] = useState(
    Array.from({ length: achievementCount }, () => ({}))
  )
  const [customSectionCount, setCustomSectionCount] = useState(1)
  const [customSection, setCustomSection] = useState(
    Array.from({ length: customSectionCount }, () => ({}))
  )
  const [image, setImage] = useState(null)

  //use effect for download functionality
  useEffect(() => {
    if (downloadStatus && downloadUrl) {
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = 'resume.pdf'
      link.click()
      // Revoke the temporary URL to avoid memory leaks
      window.URL.revokeObjectURL(downloadUrl)
      // Reset the URL so the download isn't triggered multiple times
      setDownloadUrl(null)
    }
  }, [downloadStatus, downloadUrl])

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setIsSubmitted(true)
      const response = await fetch(process.env.REACT_APP_API_URL + '/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          personalDetails,
          achievements,
          edu,
          skill,
          projects,
          work,
          course,
          image,
          customSection
        })
      })
      if (response.ok) {
        setResStatus('Successfully Generated Your Resume')
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        setDownloadUrl(url)
      } else {
        setResStatus('Oops!! Something went wrong. Please try again later.')
        console.error('Request failed with status', response.status)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const changeStep = (x) => {
    setStep((current) => current + x)
    console.log(edu)
  }

  const handleInputChange = (index, e, _state, _stateChanger) => {
    const values = [..._state]
    const name = e.target.name
    values[index][name] = e.target.value
    _stateChanger(values)
  }

  const handleAddClick = (count, countChanger, _state, _stateChanger) => {
    countChanger(count + 1)
    _stateChanger([..._state, {}])
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    e.preventDefault()
    if (!file) {
      console.log('No file uploaded')
      return
    } else {
      console.log(file)
      const formData = new FormData()
      formData.append('image', file)

      try {
        fetch('https://perfect-resume-backend.onrender.com/upload', {
          method: 'POST',
          body: formData
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
  return (
    <>
      {isSubmitted ? (
        <DownloadPage
          status={resStatus}
          setResStatus={setResStatus}
          setIsSubmitted={setIsSubmitted}
          setDownloadStatus={setDownloadStatus}
        />
      ) : (
        <Container maxWidth='sm'>
          <Box marginTop={4}>
            <form
              encType='multipart/form-data'
              noValidate
              autoComplete='off'
              onSubmit={handleSubmit}
            >
              {step === 1 && (
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  flexDirection={'column'}
                  gap={'5vh'}
                >
                  <Heading>Personal Details</Heading>
                  <Box display={'flex'} alignItems={'flex-start'} gap={'5vh'}>
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'stretch'}
                      gap={'3vh'}
                    >
                      <Box>
                        <TextField
                          required
                          id='name'
                          label='Name'
                          name='name'
                          value={personalDetails[0].name || ''}
                          onChange={(event) =>
                            handleInputChange(
                              0,
                              event,
                              personalDetails,
                              setPersonalDetails
                            )
                          }
                        />
                      </Box>
                      <Box>
                        <TextField
                          required
                          id='email'
                          label='Email'
                          type='email'
                          name='email'
                          value={personalDetails[0].email || ''}
                          onChange={(event) =>
                            handleInputChange(
                              0,
                              event,
                              personalDetails,
                              setPersonalDetails
                            )
                          }
                        />
                      </Box>
                      <Box>
                        <TextField
                          required
                          id='phone'
                          label='Phone Number'
                          type='tel'
                          name='phone'
                          value={personalDetails[0].phone || ''}
                          onChange={(event) =>
                            handleInputChange(
                              0,
                              event,
                              personalDetails,
                              setPersonalDetails
                            )
                          }
                        />
                      </Box>
                      <Box>
                        <TextField
                          required
                          fullWidth
                          id='dob'
                          type='date'
                          name='dob'
                          value={personalDetails[0].dob || ''}
                          onChange={(event) =>
                            handleInputChange(
                              0,
                              event,
                              personalDetails,
                              setPersonalDetails
                            )
                          }
                        />
                      </Box>
                    </Box>
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'stretch'}
                      gap={'3vh'}
                    >
                      <Box>
                        <TextField
                          required
                          id='address'
                          label='Address'
                          name='address'
                          value={personalDetails[0].address || ''}
                          onChange={(event) =>
                            handleInputChange(
                              0,
                              event,
                              personalDetails,
                              setPersonalDetails
                            )
                          }
                        />
                      </Box>
                      <Box>
                        <TextField
                          required
                          id='about'
                          label='About Me'
                          name='about'
                          value={personalDetails[0].about || ''}
                          onChange={(event) =>
                            handleInputChange(
                              0,
                              event,
                              personalDetails,
                              setPersonalDetails
                            )
                          }
                        />
                      </Box>
                      <Box>
                        <TextField
                          required
                          id='linktree'
                          label='Linktree link'
                          name='linktree'
                          value={personalDetails[0].linktree || ''}
                          onChange={(event) =>
                            handleInputChange(
                              0,
                              event,
                              personalDetails,
                              setPersonalDetails
                            )
                          }
                        />
                      </Box>
                      <Box padding={'19px 25px'} border={'0.5px solid #b6b0b0'}>
                        <input
                          type='file'
                          name='imageUpload'
                          id='imageUpload'
                          accept='image/jpg, image/png'
                          style={{ display: 'none' }}
                          onChange={handleImageChange}
                        />
                        <label htmlFor='imageUpload' className='imageUpload'>
                          Upload your image here
                        </label>
                      </Box>
                    </Box>
                  </Box>

                  <NavigationButtons>
                    <StyledButton
                      sx={{
                        background: 'var(--color-tertiary)',
                        color: 'white',
                        ':hover': {
                          background: 'var(--color-quaternary)'
                        }
                      }}
                      onClick={() => changeStep(1)}
                    >
                      Next
                    </StyledButton>
                  </NavigationButtons>
                </Box>
              )}
              {step === 2 && (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'5vh'}
                >
                  <Box>
                    <Heading>Education</Heading>
                  </Box>
                  {Array.from({ length: eduCount }, (_, index) => (
                    <Box display={'flex'} gap={2}>
                      <TextField
                        style={{ width: '200px' }}
                        name='course'
                        label='Course / Exam'
                        key={`course-${index}`}
                        value={edu[index].course || ''}
                        onChange={(event) =>
                          handleInputChange(index, event, edu, setEdu)
                        }
                      />
                      <TextField
                        style={{ width: '200px' }}
                        name='institution'
                        label='Institution'
                        key={`institution-${index}`}
                        value={edu[index].institution || ''}
                        onChange={(event) =>
                          handleInputChange(index, event, edu, setEdu)
                        }
                      />
                      <TextField
                        style={{ width: '200px' }}
                        name='year'
                        label='Year of passing'
                        key={`year-${index}`}
                        value={edu[index].year || ''}
                        onChange={(event) =>
                          handleInputChange(index, event, edu, setEdu)
                        }
                      />
                      <TextField
                        style={{ width: '200px' }}
                        name='marks'
                        label='Percentage / CGPA'
                        key={`marks-${index}`}
                        value={edu[index].marks || ''}
                        onChange={(event) =>
                          handleInputChange(index, event, edu, setEdu)
                        }
                      />
                    </Box>
                  ))}
                  <NavigationButtons>
                    <Box>
                      <StyledButton onClick={() => changeStep(-1)}>
                        Back
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton
                        onClick={() =>
                          handleAddClick(eduCount, setEduCount, edu, setEdu)
                        }
                      >
                        Add input
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton onClick={() => changeStep(1)}>
                        Next
                      </StyledButton>
                    </Box>
                  </NavigationButtons>
                </Box>
              )}
              {step === 3 && (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'5vh'}
                >
                  <Heading>What Skills do you have?</Heading>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={2}
                  >
                    {Array.from({ length: skillCount }, (_, index) => (
                      <Box display={'flex'} gap={2}>
                        <TextField
                          label='Skill'
                          name='skill'
                          key={`skill-${index}`}
                          value={skill[index].skill || ''}
                          onChange={(event) =>
                            handleInputChange(index, event, skill, setSkill)
                          }
                        />
                        <TextField
                          label='Level'
                          name='level'
                          key={`level-${index}`}
                          value={skill[index].level || ''}
                          onChange={(event) =>
                            handleInputChange(index, event, skill, setSkill)
                          }
                        />
                      </Box>
                    ))}{' '}
                  </Box>
                  <NavigationButtons>
                    <Box>
                      <StyledButton onClick={() => changeStep(-1)}>
                        Back
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton
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
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton onClick={() => changeStep(1)}>
                        Next
                      </StyledButton>
                    </Box>
                  </NavigationButtons>
                </Box>
              )}
              {step === 4 && (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'5vh'}
                >
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    textAlign={'center'}
                  >
                    <Heading>Your Projects / Internships</Heading>
                  </Box>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={2}
                  >
                    {Array.from({ length: projectCount }, (_, index) => (
                      <Box display={'flex'} alignItems={'center'} gap={2}>
                        <TextField
                          label='Company / Project Name'
                          name='company'
                          key={`name-${index}`}
                          value={projects[index].company || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              projects,
                              setProjects
                            )
                          }
                          style={{ width: '100px' }}
                        />
                        <TextField
                          label='Position'
                          name='position'
                          key={`position-${index}`}
                          value={projects[index].position || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              projects,
                              setProjects
                            )
                          }
                          style={{ width: '100px' }}
                        />
                        <TextField
                          label='Start'
                          name='start'
                          key={`start-${index}`}
                          value={projects[index].start || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              projects,
                              setProjects
                            )
                          }
                          style={{ width: '100px' }}
                        />
                        <TextField
                          label='End'
                          name='end'
                          key={`end-${index}`}
                          value={projects[index].end || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              projects,
                              setProjects
                            )
                          }
                          style={{ width: '100px' }}
                        />
                        <TextField
                          label='Experience / Acheivements'
                          name='exp'
                          key={`exp-${index}`}
                          value={projects[index].exp || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              projects,
                              setProjects
                            )
                          }
                          style={{ width: '250px' }}
                        />
                      </Box>
                    ))}{' '}
                  </Box>
                  <NavigationButtons>
                    <Box>
                      <StyledButton onClick={() => changeStep(-1)}>
                        Back
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton
                        onClick={() =>
                          handleAddClick(
                            projectCount,
                            setProjectCount,
                            projects,
                            setProjects
                          )
                        }
                      >
                        Add input
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton onClick={() => changeStep(1)}>
                        Next
                      </StyledButton>
                    </Box>
                  </NavigationButtons>
                </Box>
              )}
              {step === 5 && (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'5vh'}
                >
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    textAlign={'center'}
                  >
                    <Heading>Your Work Experience / Projects</Heading>
                  </Box>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={2}
                  >
                    {Array.from({ length: workCount }, (_, index) => (
                      <Box display={'flex'} alignItems={'center'} gap={2}>
                        <TextField
                          label='Company Name'
                          name='company'
                          key={`company-${index}`}
                          value={work[index].company || ''}
                          onChange={(event) =>
                            handleInputChange(index, event, work, setWork)
                          }
                          style={{ width: '100px' }}
                        />
                        <TextField
                          label='Position'
                          name='position'
                          key={`position-${index}`}
                          value={work[index].position || ''}
                          onChange={(event) =>
                            handleInputChange(index, event, work, setWork)
                          }
                          style={{ width: '100px' }}
                        />
                        <TextField
                          label='Start'
                          name='start'
                          key={`start-${index}`}
                          value={work[index].start || ''}
                          onChange={(event) =>
                            handleInputChange(index, event, work, setWork)
                          }
                          style={{ width: '100px' }}
                        />
                        <TextField
                          label='End'
                          name='end'
                          key={`end-${index}`}
                          value={work[index].end || ''}
                          onChange={(event) =>
                            handleInputChange(index, event, work, setWork)
                          }
                          style={{ width: '100px' }}
                        />
                        <TextField
                          label='Experience / Acheivements'
                          name='exp'
                          key={`exp-${index}`}
                          value={work[index].exp || ''}
                          onChange={(event) =>
                            handleInputChange(index, event, work, setWork)
                          }
                          style={{ width: '250px' }}
                        />
                      </Box>
                    ))}{' '}
                  </Box>
                  <NavigationButtons>
                    <Box>
                      <StyledButton onClick={() => changeStep(-1)}>
                        Back
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton
                        onClick={() =>
                          handleAddClick(workCount, setWorkCount, work, setWork)
                        }
                      >
                        Add input
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton onClick={() => changeStep(1)}>
                        Next
                      </StyledButton>
                    </Box>
                  </NavigationButtons>
                </Box>
              )}
              {step === 6 && (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'5vh'}
                >
                  <Box textAlign={'center'}>
                    <Heading>Awards / Achievements</Heading>
                  </Box>
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    gap={2}
                  >
                    {Array.from({ length: achievementCount }, (_, index) => (
                      <Box display={'flex'} gap={2}>
                        <TextField
                          style={{ width: '200px' }}
                          label='Achievement / Prize'
                          name='name'
                          key={`name-${index}`}
                          value={achievements[index].name || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              achievements,
                              setAchievements
                            )
                          }
                        />
                        <TextField
                          style={{ width: '200px' }}
                          label='Name of the Event'
                          name='event'
                          key={`event-${index}`}
                          value={achievements[index].event || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              achievements,
                              setAchievements
                            )
                          }
                        />
                        <TextField
                          style={{ width: '200px' }}
                          label='Organised by'
                          name='organiser'
                          key={`organiser-${index}`}
                          value={achievements[index].organiser || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              achievements,
                              setAchievements
                            )
                          }
                        />
                        <TextField
                          style={{ width: '200px' }}
                          label='Year'
                          name='year'
                          key={`year-${index}`}
                          value={achievements[index].year || ''}
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
                    ))}{' '}
                  </Box>
                  <NavigationButtons>
                    <Box>
                      <StyledButton onClick={() => changeStep(-1)}>
                        Back
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton
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
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton onClick={() => changeStep(1)}>
                        Next
                      </StyledButton>
                    </Box>
                  </NavigationButtons>
                </Box>
              )}

              {step === 7 && (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'5vh'}
                >
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    textAlign={'center'}
                  >
                    <Heading>Additional Qualifications and Courses</Heading>
                  </Box>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={2}
                  >
                    {Array.from({ length: courseCount }, (_, index) => (
                      <Box display={'flex'} alignItems={'center'} gap={2}>
                        <TextField
                          label='Course Name'
                          name='course'
                          key={`course-${index}`}
                          value={course[index].course || ''}
                          onChange={(event) =>
                            handleInputChange(index, event, course, setCourse)
                          }
                          style={{ width: '150px' }}
                        />
                        <TextField
                          label='Duration'
                          name='duration'
                          key={`duration-${index}`}
                          value={course[index].duration || ''}
                          onChange={(event) =>
                            handleInputChange(index, event, course, setCourse)
                          }
                          style={{ width: '150px' }}
                        />
                        <TextField
                          label='Experience / Acheivements'
                          name='exp'
                          key={`exp-${index}`}
                          value={course[index].exp || ''}
                          onChange={(event) =>
                            handleInputChange(index, event, course, setCourse)
                          }
                          style={{ width: '350px' }}
                        />
                      </Box>
                    ))}
                  </Box>
                  <NavigationButtons>
                    <Box>
                      <StyledButton onClick={() => changeStep(-1)}>
                        Back
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton
                        onClick={() =>
                          handleAddClick(
                            courseCount,
                            setCourseCount,
                            course,
                            setCourse
                          )
                        }
                      >
                        Add input
                      </StyledButton>
                    </Box>
                    <Box>
                      <StyledButton onClick={handleSubmit}>Submit</StyledButton>
                    </Box>
                  </NavigationButtons>
                </Box>
              )}
              {/* {step === 8 && (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'5vh'}
                >
                  <Box textAlign={'center'}>
                    <Heading>You can create a Custom Section</Heading>
                  </Box>
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                  >
                    {Array.from({ length: customSectionCount }, (_, index) => (
                      <Box display={'flex'} gap={2}>
                        <TextField
                          style={{ width: '200px' }}
                          label='Name of the section'
                          name='name'
                          key={`name-${index}`}
                          value={customSection[index].name || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              customSection,
                              setCustomSection
                            )
                          }
                        />
                        <TextField
                          style={{ width: '200px' }}
                          label='Name of the Event'
                          name='event'
                          key={`event-${index}`}
                          value={customSection[index].event || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              customSection,
                              setCustomSection
                            )
                          }
                        />
                        <TextField
                          style={{ width: '200px' }}
                          label='Organised by'
                          name='organiser'
                          key={`organiser-${index}`}
                          value={customSection[index].organiser || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              customSection,
                              setCustomSection
                            )
                          }
                        />
                        <TextField
                          style={{ width: '200px' }}
                          label='Year'
                          name='year'
                          key={`year-${index}`}
                          value={achievements[index].year || ''}
                          onChange={(event) =>
                            handleInputChange(
                              index,
                              event,
                              customSection,
                              setCustomSection
                            )
                          }
                        />
                      </Box>
                    ))}
                    <Box display={'flex'}>
                      <Box>
                        <StyledButton
                          
                          
                          onClick={() => changeStep(-1)}
                        >
                          Back
                        </StyledButton>
                      </Box>
                      <Box>
                        <StyledButton
                          
                          
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
                        </StyledButton>
                      </Box>
                      <Box>
                        <StyledButton
                          
                          
                          onClick={handleSubmit}
                        >
                          Submit
                        </StyledButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )} */}
            </form>
          </Box>
        </Container>
      )}
    </>
  )
}

export default Form
