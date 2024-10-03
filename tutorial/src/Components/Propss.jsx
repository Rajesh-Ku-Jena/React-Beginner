import React from 'react'

const Propss = (props) => {
    
  return (
    <>
    <h2>1. Props</h2>
    <ul>
        <li>Props stands for properties</li>
        <li>props are used to transfer the data from one component to another</li>
        <li>Props are only read only</li>
    </ul>
    <h4>Hello {props.name} </h4>
    </>
  )
}

export default Propss