import React from "react";

const AppControlsPrice = ({ priceTotal }) => {
  return (
    <div>
      <h2>
        Total Price:<span>{priceTotal}</span>
      </h2>
    </div>
  );
};

export default AppControlsPrice;
