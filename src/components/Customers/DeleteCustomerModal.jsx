import React from "react";
import { useGlobalContext } from "../../context/context";
import DeleteConfirmation from "../../shared/DeleteConfirmation/DeleteConfirmation";

const DeleteCustomerModal = (props) => {
  const { deleteCustomer } = useGlobalContext();

  const deleteAction = () => {
    deleteCustomer(props.userId);
  };

  return (
    <DeleteConfirmation
      open={props.open}
      closeConfirm={props.closeConfirm}
      title="Are you sure you want delete customer"
      deleteAction={deleteAction}
    />
  );
};

export default DeleteCustomerModal;
