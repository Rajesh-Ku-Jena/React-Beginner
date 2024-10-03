import { useState } from 'react'
import './App.css'
import States from './Components/States'
import Propss from './Components/Propss'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Lessons</h1>
      <Propss name='Rajesh'/>
      <States />
      
      
    </>
  )
}

export default App
