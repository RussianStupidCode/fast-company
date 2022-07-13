import React from "react";
import { renderPhrase } from "../utils";
import { SearchStatus } from "./users/searchStatus";
import TableBody from "./users/tableBody";
import TableHead from "./users/tableHead";

const Users = ({ headers, users, handlers }) => {
  if (!users.length) {
    return (
      <SearchStatus count={users.length} text="Никто с тобой не тусанет" />
    );
  }

  const text = renderPhrase(users.length);

  return (
    <>
      <SearchStatus count={users.length} text={text} />
      <table className="table m-0">
        <TableHead headers={headers} />
        <TableBody users={users} handlers={handlers} />
      </table>
    </>
  );
};

export default Users;
