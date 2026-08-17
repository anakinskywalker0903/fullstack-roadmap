import React from 'react'

function Card(props) {

    console.log(props);


  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1704748429943-12b2d04092e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="" />
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quidem?</p>
            <button>View Profile</button>
          </div>
  )
}

export default Card