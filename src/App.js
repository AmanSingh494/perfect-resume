import { useEffect } from 'react'
import './index.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import ProcessBar from './components/ProcessBar'
import { Box } from '@mui/material'
function App() {
  useEffect(() => {
    document.title = 'Perfect Resume'
  }, [])
  return (
    <div>
      <Navbar />
      <Box display='flex' alignItems={'center'}>
        <ProcessBar />
        <Form />
      </Box>
    </div>
  )
}

export default App
