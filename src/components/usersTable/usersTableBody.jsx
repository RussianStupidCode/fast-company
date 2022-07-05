import React from "react";
import { getUserTableData } from "../../utils";
import UsersRowTable from "./usersRowTable";

const UsersTableBody = ({ users, deleteButtonOnClick }) => {
  return (
    <tbody>
      {users.map((user) => {
        const userData = getUserTableData(user);
        return (
          <UsersRowTable
            key={userData._id}
            userRowData={userData}
            deleteButtonOnClick={deleteButtonOnClick}
          />
        );
      })}
    </tbody>
  );
};

export default UsersTableBody;
