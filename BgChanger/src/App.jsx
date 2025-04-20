import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  const Red = () => {
    setColor("red")
  }

  return (
    <div className='w-full h-screen duration-200'style={{ backgroundColor: color }}>
      <div className='fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 justify-center shadow-lg bg-amber-50 rounded-3xl px-3 py-3'>
          <button onClick={Red} className='outline-none px-4 py-1 rounded-full text-white shodow-lg cursor-pointer' style={{backgroundColor:"red"}}>
            Red
          </button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shodow-lg cursor-pointer' style={{backgroundColor:"green"}}>
            Green
          </button>
          <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shodow-lg cursor-pointer' style={{backgroundColor:"purple"}}>
            Purple
          </button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shodow-lg cursor-pointer' style={{backgroundColor:"blue"}}>
            Blue
          </button>
          <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shodow-lg cursor-pointer' style={{backgroundColor:"orange"}}>
            Orange
          </button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shodow-lg cursor-pointer' style={{backgroundColor:"yellow"}}>
            Yellow
          </button>
          <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shodow-lg cursor-pointer' style={{backgroundColor:"pink"}}>
            Pink
          </button>
          <button onClick={()=>setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shodow-lg cursor-pointer' style={{backgroundColor:"white"}}>
            White
          </button>
        </div>
        
          
      </div>
    </div>
  )
}

export default App
