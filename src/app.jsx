import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
import { getUserTableData, getUserValue } from "./utils/utils";

const App = () => {
    const initalState = api.users
        .fetchAll()
        .map((user) => getUserTableData(user));

    const [users, setUsers] = useState(initalState);

    const headers = [
        "Имя",
        "Качества",
        "Профессия",
        "Встретился, раз",
        "Оценка",
        "Избранное",
        "" // для delete
    ];

    const hadleUserDelete = (userId) => {
        const newUsers = users.filter(({ _id }) => _id !== userId);
        setUsers(newUsers);
    };

    const handleBookMarkChange = (userId) => {
        const user = users.find(({ _id }) => _id === userId);

        const bookmark = getUserValue(user, "bookmark");
        bookmark.value = !bookmark.value;

        setUsers([...users]);
    };

    const handlers = {
        bookmark: {
            onClick: handleBookMarkChange
        },
        deleteButton: {
            onClick: hadleUserDelete
        }
    };

    return <Users headers={headers} users={users} handlers={handlers} />;
};

export default App;
