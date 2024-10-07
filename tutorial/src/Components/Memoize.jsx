import React, { useMemo, useState } from 'react'


const Memoize = () => {
    const[count, setCount]= useState(0)
    const[data, setData]= useState(100)
    const multiplication= useMemo(
      function multiply(){
        console.log("****");
        return count*5;
    },[count])
    
  return (
    <>
    <h2>useMemo :</h2>
    <h3>To fix the performance issue, we can use the useMemo Hook </h3>
    <h3>The useMemo hook is  Memoize the return value of an expensiveCalculation function. it sotres the value as cached value 
        so that the value need not be calculated again. This will cause the function  only run when it needed.
    </h3>
    <h3>We can wrap the expensive function call with useMemo.</h3>
    <h3>The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.</h3>


    <br />
    <br />
    <h1>{count} </h1>
  
    <button onClick={()=> setCount(count+11)}> Add</button>    
    <button onClick={()=> setData(data- 1)}> minus</button> <p>{data}</p>
    <h2>the multipication is {multiplication}</h2>


    </>
  )
}

export default Memoize