import React, { useState } from 'react'
import './appmealslist.css'

function AppMealsList({meals, deleteMealHandler}) {

  const [filter,setFilter] = useState('');

  const filteredData = meals.filter(item => item.mealName.toLowerCase().includes(filter.toLowerCase()));

  const filterMealHandler = (e) => {
    setFilter(e.target.value);
  }

  const showTableHeaders = meals.length > 0;
  return (
    <div className='meals_list_container'>
      {showTableHeaders && (
      <input
        type="text"
        placeholder="Filter by MealName"
        id="filter_container_by_name"
        value={filter}
        onChange={filterMealHandler}
      />
      )}
    <table className="table table-bordered border-primary" id='meal-table'>
      {showTableHeaders && (
        <thead>
          <tr>
            <th>ID</th>
            <th>Meal</th>
            <th>Calories</th>
            <th>Price</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
      )}
      <tbody>
        {filteredData.map((meal, index) => (
          <tr key={index}>
            <td>{meal.id}</td>
            <td>{meal.mealName}</td>
            <td>{meal.calories}</td>
            <td>{meal.price}</td>
            <td>{meal.date}</td>
            <td>
              <button className='btn btn-danger' onClick={() => deleteMealHandler(meal.id)}>Clear</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default AppMealsList