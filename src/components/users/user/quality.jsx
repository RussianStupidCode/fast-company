import React from "react";

const Quality = ({ color, name }) => {
  const getBadgeClass = (color) => {
    return `badge bg-${color} mx-1`;
  };

  return <span className={getBadgeClass(color)}>{name}</span>;
};

export default Quality;
