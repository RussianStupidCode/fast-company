import React from "react";

const UsersTableHead = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((head, index) => (
          <th key={index} scope="col">
            {head}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default UsersTableHead;
