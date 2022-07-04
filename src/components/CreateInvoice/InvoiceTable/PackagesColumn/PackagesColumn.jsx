import React from "react";

const PackagesColumn = (props) => {
  return (
    <div className="id">
      <p> ID</p>
      {props.packages.map((pack) => (
        <p key={pack.id}>{pack.id}</p>
      ))}
    </div>
  );
};

export default PackagesColumn;
