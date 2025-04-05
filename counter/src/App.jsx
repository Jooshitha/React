import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Increase = () => {
    setCount(count + 1)
  }

  const Decrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>This Is The Counter</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={Increase}>Increase {count}</button>
      <button onClick={Decrease}>Decrease {count}</button>
    </>
  )
}

export default App
