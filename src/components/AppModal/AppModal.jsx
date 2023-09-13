import React from 'react'
import './appmodal.css'

function AppModal({setOpenModal}) {

  return (
    <div className='meal_container_modal'>
        <h3>Calories should not be 0 or Meal should not be Empty</h3>
        <button onClick={()=>setOpenModal(false)} className='btn_close_modal'>Close</button>
    </div>
  )
}

export default AppModal