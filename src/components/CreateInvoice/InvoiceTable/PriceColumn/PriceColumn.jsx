import React from "react";

const PriceColumn = (props) => {
  return (
    <div className="price">
      <p > Price</p>
      <div >
        {props.packages.map((pack) => (
          <p key={pack.id}>
            {pack.price}
          </p>
        ))}
      </div>
      <h3 className="Totle">Total: {props.priceSum}</h3>
    </div>
  );
};

export default PriceColumn;
