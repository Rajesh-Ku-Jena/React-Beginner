import React, { useState } from 'react'

function States() {
  const [count, setCount]=useState(0)
  function updateCount(){
    setCount(count + 1)
  }
  return (
    <>
    <h2>You click here {count} times</h2>
    <button onClick={updateCount}>count</button>
    </>
  )
}

export default States