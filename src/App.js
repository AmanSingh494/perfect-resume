import { useEffect, useState } from 'react'
import './index.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import ProcessBar from './components/ProcessBar'
import { Box } from '@mui/material'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
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
    <BrowserRouter>
      <Main>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Navbar current={'home'} />
                <LandingPage />
              </>
            }
          />
          <Route
            path='/create-resume'
            element={
              <>
                <Navbar current={'create-resume'} />
                <Box display='flex' alignItems={'center'}>
                  <ProcessBar step={step} setStep={setStep} />
                  <Form step={step} setStep={setStep} />
                </Box>
              </>
            }
          />
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App
