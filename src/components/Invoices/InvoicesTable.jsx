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
import InvoicesTableRow from "./InvoicesTableRow";
import { useGlobalContext } from "../../context/context";
const InvoicesTable = () => {
  const { invoices } = useGlobalContext();
  return (
    <TableContainer component={Paper}>
      {invoices.length > 0 ? (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Customer Name</TableCell>
              <TableCell align="center">Total Weight</TableCell>
              <TableCell align="center">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => {
              return <InvoicesTableRow key={invoice.id} invoice={invoice} />;
            })}
          </TableBody>
        </Table>
      ) : (
        <p>No invoices created yet</p>
      )}
    </TableContainer>
  );
};

export default InvoicesTable;
