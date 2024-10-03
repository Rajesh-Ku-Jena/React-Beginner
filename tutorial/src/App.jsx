import { useState } from 'react'
import './App.css'
import States from './Components/States'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Lessons</h1>
      <States />
      
    </>
  )
}

export default App
