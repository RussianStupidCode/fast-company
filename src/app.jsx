import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";
import { getUserTableData, getUserValue } from "./utils/utils";
import {
    allPageCount,
    isChangePageForDelete,
    pagesForCurrentPage
} from "./utils/paginate";
import { getFilteredUsers } from "./utils/filter";

const App = () => {
    const [users, setUsers] = useState([]);

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

    const [currentPage, setCurrentPage] = useState(1);

    const [professions, setProfessions] = useState(api.professions.fetchAll());

    const [selectedProfession, setSelectedProfession] = useState({});

    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        api.users.fetchAll().then((data) => {
            const usersData = data.map((object) => getUserTableData(object));
            setUsers(usersData);
            setFilteredUsers(usersData);

            const pages = pagesForCurrentPage(
                1,
                maxPageLists,
                allPageCount(usersData.length, pageSize)
            );

            setPages(pages);
        });

        api.professions.fetchAll().then((data) => {
            setProfessions(data);
        });
    }, []);

    const [pages, setPages] = useState([]);

    const repaginate = (newPageNumber, userCount) => {
        const maxPageNumber = allPageCount(userCount, pageSize);
        const pages = pagesForCurrentPage(
            newPageNumber,
            maxPageLists,
            maxPageNumber
        );
        setPages(pages);
        setCurrentPage(newPageNumber);
    };

    const handlePageNext = () => {
        const pagesListIndex = Math.floor((currentPage - 1) / maxPageLists);
        const maxPageNumber = allPageCount(filteredUsers.length, pageSize);
        const maxPageListIndex = Math.floor((maxPageNumber - 1) / maxPageLists);

        if (pagesListIndex === maxPageListIndex) {
            return;
        }

        const newPageNumber = (pagesListIndex + 1) * maxPageLists + 1;
        repaginate(newPageNumber, filteredUsers.length);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProfession(item);

        const newFilteredUsers = getFilteredUsers(
            users,
            "profession",
            item._id
        );

        setFilteredUsers(newFilteredUsers);

        repaginate(1, newFilteredUsers.length);
    };

    const handlePagePrevious = () => {
        const pagesListIndex = Math.floor((currentPage - 1) / maxPageLists);

        if (pagesListIndex === 0) {
            return;
        }

        const newPageNumber = (pagesListIndex - 1) * maxPageLists + 1;
        repaginate(newPageNumber, filteredUsers.length);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const hadleUserDelete = (userId) => {
        const count = filteredUsers.length;

        const newUsers = users.filter(({ _id }) => _id !== userId);
        setUsers(newUsers);

        let newPageNumber = currentPage;

        if (isChangePageForDelete(currentPage, pageSize, count)) {
            newPageNumber = currentPage - 1;
        }

        const newFilteredUsers = getFilteredUsers(
            newUsers,
            "profession",
            selectedProfession._id
        );
        setFilteredUsers(newFilteredUsers);

        repaginate(newPageNumber, newFilteredUsers.length);
    };

    const handleBookMarkChange = (userId) => {
        const user = users.find(({ _id }) => _id === userId);

        const bookmark = getUserValue(user, "bookmark");
        bookmark.value = !bookmark.value;

        setUsers([...users]);
    };

    const handleClearFilter = () => {
        setSelectedProfession({});
        setFilteredUsers(users);

        repaginate(1, users.length);
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
        },
        groupList: {
            onItemSelect: handleProfessionSelect,
            onClearSelect: handleClearFilter
        }
    };

    const groupList = {
        professions,
        selectedItem: selectedProfession
    };

    return (
        <Users
            headers={headers}
            users={filteredUsers}
            groupList={groupList}
            pages={pages}
            handlers={handlers}
            pageSize={pageSize}
            currentPage={currentPage}
        />
    );
};

export default App;
