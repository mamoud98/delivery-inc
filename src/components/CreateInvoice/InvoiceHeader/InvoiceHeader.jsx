import React from "react";
const InvoiceHeader = (props) => {
  return (
    <div className="header">
      <div>
        <p>{new Date().toDateString()}</p>
        <p>{props.customer?.name}</p>
      </div>
      <div>
        <h3>Invoice</h3>
        <p>No. {props.invoice?.id}</p>
      </div>
    </div>
  );
};

export default InvoiceHeader;
