import { useState } from 'react'
import './App.css'

function App() {
  const [len, setLen] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  return (
    <>
      <h1 className='text-white text-center'>Password Generator</h1>
    </>
  )
}

export default App
