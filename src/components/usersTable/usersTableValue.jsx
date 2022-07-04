import React from "react";

const UserTableValue = ({ name, value }) => {
  const getBadgeClass = (color) => {
    return `badge bg-${color} mx-1`;
  };

  if (name === "qualities") {
    return value.map(({ _id, name: quality, color }) => (
      <span key={_id} className={getBadgeClass(color)}>
        {quality}
      </span>
    ));
  }

  return value;
};

export default UserTableValue;
