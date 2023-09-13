import React from 'react'
import './Appbar.css'
import { Link } from 'react-router-dom'

const AppBar = () => {

  return (
    <div className='track'>
        <h1 className='track-child'>Calories Tracking App</h1>
        {/* <Link to="/">Calories</Link> */}
    </div>
  )
}

export default AppBar