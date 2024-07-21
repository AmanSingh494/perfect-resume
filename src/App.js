import { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import MainContainer from './components/MainContainer'
import ExperiencesInput from './components/ExperiencesInput'
const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
function App() {
  const [templateName, setTemplateName] = useState('')
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
                <LandingPage
                  setTemplateName={setTemplateName}
                  templateName={templateName}
                />
              </>
            }
          />
          <Route
            path='/create-resume'
            element={
              <>
                <Navbar current={'create-resume'} />
                <MainContainer templateName={templateName} />
              </>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </Main>
    </BrowserRouter>
  )
}

export default App
