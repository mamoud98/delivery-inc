import React from "react";
import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import DeletePackageModal from "./DeletePackageModal";
import useOpenConfirm from "../../hooks/useOpenConfirm";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useGlobalContext } from "../../context/context";

const PackagesTableRow = (props) => {
  const { open, openConfirm, closeConfirm } = useOpenConfirm();
  const { movePackageDown, movePackageUp } = useGlobalContext();

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="center" component="th" scope="row">
          {props.pack.id}
        </TableCell>
        <TableCell align="center">{props.pack.customer?.name}</TableCell>
        <TableCell align="center">{props.pack.weight}</TableCell>
        <TableCell align="center">{props.pack.price}</TableCell>
        <TableCell align="center">
          <Button onClick={openConfirm} variant="contained">
            Delete
          </Button>
          <IconButton
            disabled={props.isFirst}
            onClick={() => movePackageUp(props.packageIndex)}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
          <IconButton
            disabled={props.isLast}
            onClick={() => movePackageDown(props.packageIndex)}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <DeletePackageModal
        open={open}
        closeConfirm={closeConfirm}
        packageId={props.pack.id}
      />
    </>
  );
};

export default PackagesTableRow;
