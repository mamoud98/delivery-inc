import React from "react";
import { Typography } from "@mui/material";
import "./header.css";
const Header = (props) => {
  return (
    <div className="header-div">
      <Typography className="header" variant="h5">
        {props.text}
      </Typography>
    </div>
  );
};

export default Header;
