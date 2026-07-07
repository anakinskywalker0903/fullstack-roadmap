import React from 'react'

const App = () => {

  const submitHandler = () => {
    e.preventDefault()
    console.log('form submitted');
    
  }


  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App