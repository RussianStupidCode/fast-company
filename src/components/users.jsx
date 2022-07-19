import React, { useState } from "react";
import PropTypes from "prop-types";
import { renderPhrase } from "../utils/utils";
import pagiante from "../utils/pagiante";
import Pagiantion from "./pagination";
import { SearchStatus } from "./users/searchStatus";
import TableBody from "./users/tableBody";
import TableHead from "./users/tableHead";

const Users = ({ headers, users, handlers }) => {
    if (!users.length) {
        return (
            <SearchStatus
                count={users.length}
                text="Никто с тобой не тусанет"
            />
        );
    }

    const pageSize = 4;

    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const text = renderPhrase(users.length);

    const usersForPage = pagiante(users, currentPage, pageSize);

    return (
        <>
            <SearchStatus count={users.length} text={text} />
            <table className="table m-1">
                <TableHead headers={headers} />
                <TableBody users={usersForPage} handlers={handlers} />
            </table>
            <Pagiantion
                itemsCount={users.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    handlers: PropTypes.objectOf(PropTypes.object).isRequired
};

export default Users;
