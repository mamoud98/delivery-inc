import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomerTableRow from "./CustomerTableRow";
import { useGlobalContext } from "../../context/context";
const CustomersTable = () => {
  const { customers } = useGlobalContext();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers?.map((user) => {
            return <CustomerTableRow key={user.id} user={user} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomersTable;
