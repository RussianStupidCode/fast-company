import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
import { getUserTableData, getUserValue } from "./utils/utils";
import {
    allPageCount,
    isChangePageForDelete,
    pagesForCurrentPage
} from "./utils/paginate";

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

    const pageSize = 4;
    const maxPageLists = 2;

    const [pages, setPages] = useState(
        pagesForCurrentPage(
            1,
            maxPageLists,
            allPageCount(users.length, pageSize)
        )
    );

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageNext = () => {
        const pagesListIndex = Math.floor((currentPage - 1) / maxPageLists);
        const maxPageNumber = allPageCount(users.length, pageSize);
        const maxPageListIndex = Math.floor((maxPageNumber - 1) / maxPageLists);

        if (pagesListIndex === maxPageListIndex) {
            return;
        }

        const newPageNumber = (pagesListIndex + 1) * maxPageLists + 1;
        const pages = pagesForCurrentPage(
            newPageNumber,
            maxPageLists,
            maxPageNumber
        );

        setCurrentPage(newPageNumber);
        setPages(pages);
    };

    const handlePagePrevious = () => {
        const pagesListIndex = Math.floor((currentPage - 1) / maxPageLists);

        if (pagesListIndex === 0) {
            return;
        }

        const newPageNumber = (pagesListIndex - 1) * maxPageLists + 1;
        const maxPageNumber = allPageCount(users.length, pageSize);
        const pages = pagesForCurrentPage(
            newPageNumber,
            maxPageLists,
            maxPageNumber
        );

        setCurrentPage(newPageNumber);
        setPages(pages);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const hadleUserDelete = (userId) => {
        const count = users.length;

        const newUsers = users.filter(({ _id }) => _id !== userId);
        setUsers(newUsers);

        let newPageNumber = currentPage;

        if (isChangePageForDelete(currentPage, pageSize, count)) {
            newPageNumber = currentPage - 1;
            setCurrentPage(newPageNumber);
        }

        const maxPageNumber = allPageCount(newUsers.length, pageSize);
        const pages = pagesForCurrentPage(
            newPageNumber,
            maxPageLists,
            maxPageNumber
        );
        setPages(pages);
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
        },
        pagination: {
            onPagesPrevious: handlePagePrevious,
            onPageChange: handlePageChange,
            onPagesNext: handlePageNext
        }
    };

    return (
        <Users
            headers={headers}
            users={users}
            pages={pages}
            handlers={handlers}
            pageSize={pageSize}
            currentPage={currentPage}
        />
    );
};

export default App;
