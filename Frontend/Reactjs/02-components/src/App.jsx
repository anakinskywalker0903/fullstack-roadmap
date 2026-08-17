import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Navbar/>
        <Card/>
        <Card/>
    </div>
  )
}

export default App

      // <div className='card'>
      //     Rohit Dubey
      //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nostrum.</p>
      // </div>
      // {Card()}