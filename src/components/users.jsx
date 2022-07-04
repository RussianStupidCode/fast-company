import React, { useState } from "react";
import api from "../api";
import {
  UsersAvailableCount,
  UsersNotAvailable,
} from "./usersTable/usersAvailableCount";
import UsersTableBody from "./usersTable/usersTableBody";
import UsersTableHead from "./usersTable/usersTableHead";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const [headers, setHeaders] = useState([
    "Имя",
    "Качества",
    "Профессия",
    "Встретился, раз",
    "Оценка",
    "", // для delete
  ]);

  const hadleUserDelete = (userId) => {
    setUsers((prevState) => prevState.filter(({ _id }) => _id !== userId));
  };

  if (users.length === 0) {
    return <UsersNotAvailable text="Никто с тобой не тусанет" />;
  }

  const renderPhrase = (userCount) => {
    if (userCount > 2 && userCount < 5) {
      return "человека тусанут с тобой";
    }

    return "человек тусанет с тобой";
  };

  return (
    <>
      <UsersAvailableCount
        count={users.length}
        text={renderPhrase(users.length)}
      />
      <table className="table m-0">
        <UsersTableHead headers={headers} />
        <UsersTableBody users={users} deleteButtonOnClick={hadleUserDelete} />
      </table>
    </>
  );
};

export default Users;
