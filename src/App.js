import { useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Navbar from './components/Navbar'

function App() {
  useEffect(() => {
    document.title = 'Perfect Resume'
  }, [])
  return (
    <div>
      <Navbar />
      <Form />
    </div>
  )
}

export default App
