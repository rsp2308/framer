import React, { useState } from 'react'

import './App.css'


const App = () => {
const [a, setA] = useState(10)

// const changeA = () => {
// setA(20)
// }

 
  

  return (
    <div>
      <h1>aname is {a} </h1>
      <button onClick={()=>{setA(a+10)}}>inc a</button>
      <button onClick={()=>{setA(a-10)}}>dec a</button>
    </div>
  )
}

export default App
