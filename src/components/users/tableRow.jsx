import React from "react";
import DeleteButton from "./deleteButton";
import TableCellFactory from "./tableCellFactory";

const TableRow = ({ user, handlers }) => {
  return (
    <tr>
      {user.values.map(({ name, value }, index) => (
        <td key={index}>
          <TableCellFactory
            userId={user._id}
            name={name}
            value={value}
            handlers={handlers}
          />
        </td>
      ))}

      <td>
        <DeleteButton onClick={() => handlers.deleteButton.onClick(user._id)} />
      </td>
    </tr>
  );
};

export default TableRow;
