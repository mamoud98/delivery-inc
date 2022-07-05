import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import ListItemLink from "../shared/ListItemLink/ListItemLink";

function SideList(props) {
  const togleDrawer = () => {
    props.setOpen(!props.open);
  };
  return (
    <div>
      <Drawer
        anchor={"left"}
        open={props.open}
        onClose={() => props.setOpen(false)}
      >
        <List style={{ width: "300px" }}>
          <ListItemLink onclick={togleDrawer} primary={"Customers"} to="/" />
          <ListItemLink
            onclick={togleDrawer}
            primary={"PackageList"}
            to="/package-list"
          />
          <ListItemLink
            onclick={togleDrawer}
            primary={"InvoiceList"}
            to="/invoice-list"
          />
        </List>
      </Drawer>
    </div>
  );
}

export default SideList;
