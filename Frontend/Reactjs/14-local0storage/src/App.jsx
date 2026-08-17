import React from 'react'

const App = () => {

  localStorage.clear()
   
  const user = {
    username:'Sarthak',
    age:18,
    city:'Bhopal'
  }

  localStorage.setItem('user',user)

  return (
    <div>App</div>
  )
}

export default App