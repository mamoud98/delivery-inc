import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const defaultValues = {
  weight: "",
  price: "",
  customerid: "",
};

function PackageListMoudle(props) {
  const { customers, addPackage } = useGlobalContext();

  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addPackage(formValues);
    setFormValues({
      weight: "",
      price: "",
      customerid: "",
    });

    props.closeConfirm();
  };
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.closeConfirm}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <FormControl fullWidth={true}>
            <h1>add package</h1>
            <form onSubmit={handleSubmit}>
              <Grid alignItems="center" justify="center" direction="column">
                <Grid item style={{ marginBottom: "15px" }}>
                  <TextField
                    fullWidth={true}
                    InputProps={{ inputProps: { min: 1 } }}
                    required
                    id="name-input"
                    name="weight"
                    label="weight"
                    type="number"
                    value={formValues.weight}
                    onChange={handleInputChange}
                  />
                </Grid>

                <FormControl fullWidth style={{ marginBottom: "15px" }}>
                  <InputLabel id="demo-simple-select-label">
                    customer
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    name="customerid"
                    id="demo-simple-select"
                    value={formValues.customerid}
                    label="customer"
                    onChange={handleInputChange}
                  >
                    {customers &&
                      customers.map((customer, i) => (
                        <MenuItem key={i} value={customer.id}>
                          {customer.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>

                <Grid item style={{ marginBottom: "15px" }}>
                  <TextField
                    fullWidth={true}
                    InputProps={{ inputProps: { min: 1 } }}
                    required
                    id="age-input"
                    name="price"
                    label="price"
                    type="number"
                    value={formValues.price}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </form>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}

export default PackageListMoudle;
