import React from "react";

import TableRow from "./tableRow";

const TableBody = ({ users, handlers }) => {
  return (
    <tbody>
      {users.map((user) => {
        return <TableRow key={user._id} user={user} handlers={handlers} />;
      })}
    </tbody>
  );
};

export default TableBody;
