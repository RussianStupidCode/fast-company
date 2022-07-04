import React from "react";
import UserDeleteButton from "./usersDeleteButton";
import UserTableValue from "./usersTableValue";

const UsersRowTable = ({ userRowData, deleteButtonOnClick }) => {
  return (
    <tr>
      {userRowData.values.map(({ name, value }, index) => (
        <td key={index}>
          <UserTableValue name={name} value={value} />
        </td>
      ))}

      <td>
        <UserDeleteButton
          onClick={() => deleteButtonOnClick(userRowData._id)}
        />
      </td>
    </tr>
  );
};

export default UsersRowTable;
