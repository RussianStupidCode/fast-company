import React from "react";

const deleteButton = ({ onClick }) => {
  return (
    <button type="button" className="btn btn-danger" onClick={onClick}>
      delete
    </button>
  );
};

export default deleteButton;
