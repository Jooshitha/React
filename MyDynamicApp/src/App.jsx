import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState(0)

  const handleChange = (e) => {
    setText(e.target.value)
  }  
  
  return (
    <>
      <div>
        <h1>My Dynamic App</h1>
        <input
        type="text" 
        name="dynamicArea"
        placeholder='Write something here...'
        value={text}
        onChange={handleChange}
        className='w-full mt-4 bg-gray-100 p-4 rounded-lg shadow-md'
        >
        </input>
        <p className='mt-4 font-semibold text-lg'>You Typed: <span className='text-lg font-normal'>{text}</span></p>
      </div>
    </>
  )
}

export default App
