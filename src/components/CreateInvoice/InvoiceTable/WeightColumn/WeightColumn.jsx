import React from "react";

const WeightColumn = (props) => {
  return (
    <div className="weight">
      <p> Weight</p>
      <div>
        {props.packages.map((pack) => (
          <p key={pack.id}>{pack.weight}</p>
        ))}
      </div>
      <p className="Totle"> total {props.waightSum}</p>
    </div>
  );
};

export default WeightColumn;
