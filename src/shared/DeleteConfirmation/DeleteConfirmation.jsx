import React from "react";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

const typographyStyle = {
  marginBottom: "20px",
};

const DeleteConfirmation = (props) => {
  return (
    <Modal open={props.open} onClose={props.closeConfirm}>
      <Box sx={style}>
        <Typography
          sx={typographyStyle}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {props.title}
        </Typography>
        <Grid container justifyContent="center" gap={4}>
          <Button
            onClick={props.deleteAction}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
          <Button
            className="cancel-buttom"
            onClick={props.closeConfirm}
            variant="contained"
            color="inherit"
          >
            Cancel
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmation;
