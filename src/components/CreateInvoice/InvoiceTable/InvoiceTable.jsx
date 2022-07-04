import React from "react";
import PriceColumn from "./PriceColumn/PriceColumn";
import PackagesColumn from "./PackagesColumn/PackagesColumn";
import WeightColumn from "./WeightColumn/WeightColumn";

const InvoiceTable = (props) => {
  return (
    <div className="invice-table">
      <PackagesColumn packages={props.packages} />
      <WeightColumn waightSum={props.waightSum} packages={props.packages} />
      <PriceColumn priceSum={props.priceSum} packages={props.packages} />
    </div>
  );
};

export default InvoiceTable;
