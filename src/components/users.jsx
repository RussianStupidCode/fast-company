import React from "react";
import PropTypes from "prop-types";
import { renderPhrase } from "../utils/utils";
import { paginate } from "../utils/paginate";
import Pagiantion from "./pagination";
import { SearchStatus } from "./users/searchStatus";
import TableBody from "./users/tableBody";
import TableHead from "./users/tableHead";

const Users = ({ headers, users, handlers, pages, pageSize, currentPage }) => {
    if (!users.length) {
        return (
            <SearchStatus
                count={users.length}
                text="Никто с тобой не тусанет"
            />
        );
    }

    const text = renderPhrase(users.length);

    const usersForPage = paginate(users, currentPage, pageSize);
    return (
        <>
            <SearchStatus count={users.length} text={text} />
            <table className="table m-1">
                <TableHead headers={headers} />
                <TableBody users={usersForPage} handlers={handlers} />
            </table>
            <Pagiantion
                pages={pages}
                currentPage={currentPage}
                onPageChange={handlers.pagination.onPageChange}
                onPageNext={handlers.pagination.onPagesNext}
                onPagePrevious={handlers.pagination.onPagesPrevious}
            />
        </>
    );
};

Users.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageSize: PropTypes.number.isRequired,
    handlers: PropTypes.objectOf(PropTypes.object).isRequired,
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Users;
