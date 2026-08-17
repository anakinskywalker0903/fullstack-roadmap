import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const App = () => {

  const [userData, setuserData] = useState([]);

  const getData = async() => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15')
    setuserData(response.data)
  
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button 
      onClick={getData}
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded  text-white'>Get Data</button>
    </div>
  )
}

export default App