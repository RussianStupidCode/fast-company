import React from "react";

const UserDeleteButton = ({ onClick }) => {
  return (
    <button type="button" className="btn btn-danger" onClick={onClick}>
      delete
    </button>
  );
};

export default UserDeleteButton;
