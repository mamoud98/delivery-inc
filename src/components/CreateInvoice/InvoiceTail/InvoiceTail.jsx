import React from "react";

const InvoiceTail = (props) => {
  return (
    <div className="bottom">
      <p className="text">You received package {props.count} packages</p>
      <p className="text">Thank you for using our services</p>
    </div>
  );
};

export default InvoiceTail;
