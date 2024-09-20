import React from "react";

function AppControlsCounter({ total }) {
  return (
    <div className="app_controls">
      <h2>
        Total Calories:<span>{total}</span>
      </h2>
    </div>
  );
}

export default AppControlsCounter;
