import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <button type="button" className="btn btn-danger" onClick={onClick}>
      delete
    </button>
  );
};

export default DeleteButton;
