import React from "react";

const SearchStatus = ({ count, text }) => {
  let className = "badge m-1 p-1";
  className = count > 0 ? `${className} bg-primary` : `${className} bg-danger`;

  return (
    <h2>
      <span className={className}>{text}</span>
    </h2>
  );
};

export { SearchStatus };
