import React, { useMemo, forwardRef } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

function ListItemLink({ icon, primary, to, onclick }) {
  const renderLink = useMemo(
    () =>
      forwardRef(function Link(itemProps, ref) {
        return <LinkRouter to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    <li onClick={onclick}>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default ListItemLink;
