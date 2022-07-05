import React from "react";

const UsersAvailableCount = ({ count, text }) => {
  const textContent = `${count} ${text}`;

  return (
    <h2>
      <span className="badge bg-primary m-1 p-1">{textContent}</span>
    </h2>
  );
};

const UsersNotAvailable = ({ text }) => {
  return (
    <h2>
      <span className="badge bg-danger m-1 p-1">{text}</span>
    </h2>
  );
};

export { UsersAvailableCount, UsersNotAvailable };
