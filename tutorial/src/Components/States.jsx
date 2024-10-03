import React, { useState , useEffect} from 'react'

function States() {
  const [count, setCount]=useState(0)
  const [data, setData]= useState("Rajesh")
  useEffect(()=>{
    console.log("hi rajesh")
  }, [data])
  function updateCount(){
    setCount(count + 1)
  }
  function updateData(){
    setData('rajesh kumar jena')
  }
  return (
    <>
    <h2>2.useState & useEffect in React</h2>
    <ul>
      <li>The state is a built-in React object that is used to contain dataor information about the component</li>
      <li>A state can be modified based on user action or network changes</li>
      <li>Every time when the state of an object changes, React re-render the component to the browser</li>
    </ul>
    <h2>You click here {count} times</h2>
    <button onClick={updateCount}>count</button>
    <h3>your name is {data} </h3>
    <button onClick={updateData}>update name</button>
    <p>check console useEffect is call</p>
    </>
  )
}

export default States