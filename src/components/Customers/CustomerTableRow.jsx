import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteCustomerModal from "./DeleteCustomerModal";
import useOpenConfirm from "../../hooks/useOpenConfirm";
import { Link } from "react-router-dom";

const CustomerTableRow = (props) => {
  const { open, openConfirm, closeConfirm } = useOpenConfirm();

  const style = {
    link: {
      textDecoration: "none",
    },
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {props.user.id}
        </TableCell>
        <TableCell>{props.user.name}</TableCell>
        <TableCell>
          <Link style={style.link} to={`/invoice/${props.user.id}`}>
            <Button variant="contained">Create Invoice</Button>
          </Link>
        </TableCell>
        <TableCell>
          <Button onClick={openConfirm} variant="contained">
            Delete
          </Button>
        </TableCell>
      </TableRow>
      <DeleteCustomerModal
        userId={props.user.id}
        open={open}
        closeConfirm={closeConfirm}
      />
    </>
  );
};

export default CustomerTableRow;
