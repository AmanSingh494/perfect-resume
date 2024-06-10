import { useEffect, useState } from 'react'
import './index.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import ProcessBar from './components/ProcessBar'
import { Box } from '@mui/material'
import styled from 'styled-components'
const Main = styled.div`
  display: flex;
  flex-direction: column;
`
function App() {
  const [step, setStep] = useState(1)
  useEffect(() => {
    document.title = 'Perfect Resume'
  }, [])
  return (
    <Main>
      <Navbar />
      <Box display='flex' alignItems={'center'}>
        <ProcessBar step={step} setStep={setStep} />
        <Form step={step} setStep={setStep} />
      </Box>
    </Main>
  )
}

export default App
