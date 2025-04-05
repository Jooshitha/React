import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1  className='bg-amber-100 p-4 font-semibold rounded-2xl'>Tailwind Test</h1>
      <div className="flex justify-center gap-4 mt-8">
        <Card cardTxt="Available-Soon"/>
        <Card cardTxt="Coming-Soon"/>
      </div>
    </>
  )
}

export default App
