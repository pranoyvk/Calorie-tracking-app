import React from "react";
import "./applist.css";

function AppControlsInput({
  addMealHandler,
  mealName,
  calories,
  setMealName,
  setCalories,
  price,
  setPrice,
}) {
  const addMealClick = () => {
    addMealHandler();
  };

  return (
    <>
      <div>
        <strong>
          <label htmlFor="input1">Meal:</label>
        </strong>
        <input
          type="text"
          id="input1"
          className="input-field"
          placeholder="Meal"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
        <br />
        <strong>
          <label htmlFor="input2">Calories:</label>
        </strong>
        <input
          type="number"
          id="input2"
          className="input-field"
          placeholder="Calories"
          min={0}
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <br />
        <strong>
          <label htmlFor="input2">Price:</label>
        </strong>
        <input
          type="number"
          id="input3"
          className="input-field"
          placeholder="Price"
          min={0}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={addMealClick}
          className="btn btn-success custom-btn"
        >
          Add Meal
        </button>
      </div>
    </>
  );
}

export default AppControlsInput;
