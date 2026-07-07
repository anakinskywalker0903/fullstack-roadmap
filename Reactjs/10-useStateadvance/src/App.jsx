import React, { useState } from 'react'

const App = () => {

  const [num,setNum] = useState({user:'Rohit',age:20})

  const btnClicked = () => {
    setNum(num);
  }

  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App