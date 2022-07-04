import React from "react";
import { useGlobalContext } from "../../context/context";
import DeleteConfirmation from "../../shared/DeleteConfirmation/DeleteConfirmation";

const DeletePackageModal = (props) => {
  const { deletePackage } = useGlobalContext();

  const deleteAction = () => {
    deletePackage(props.packageId);
  };

  return (
    <DeleteConfirmation
      open={props.open}
      closeConfirm={props.closeConfirm}
      title="Are you sure you want delete package"
      deleteAction={deleteAction}
    />
  );
};

export default DeletePackageModal;
