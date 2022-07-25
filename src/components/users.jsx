import React from "react";
import PropTypes from "prop-types";
import { renderPhrase } from "../utils/utils";
import { paginate } from "../utils/paginate";
import Pagiantion from "./pagination";
import { SearchStatus } from "./users/searchStatus";
import TableBody from "./users/tableBody";
import TableHead from "./users/tableHead";
import GroupList from "./groupList";

const Users = ({
    headers,
    users,
    groupList,
    handlers,
    pages,
    pageSize,
    currentPage
}) => {
    if (!users.length) {
        return (
            <div className="d-flex p-0 m-0">
                <GroupList
                    items={groupList.professions}
                    selectedItem={groupList.selectedItem}
                    onItemSelect={handlers.groupList.onItemSelect}
                    onClearSelect={handlers.groupList.onClearSelect}
                />
                <div className="d-flex flex-column flex-fill">
                    <SearchStatus
                        count={users.length}
                        text="Никто с тобой не тусанет"
                    />
                </div>
            </div>
        );
    }

    const text = renderPhrase(users.length);

    const usersForPage = paginate(users, currentPage, pageSize);
    return (
        <div className="d-flex w-100 p-0 m-0">
            <GroupList
                items={groupList.professions}
                selectedItem={groupList.selectedItem}
                onItemSelect={handlers.groupList.onItemSelect}
                onClearSelect={handlers.groupList.onClearSelect}
            />

            <div className="d-flex flex-column flex-fill">
                <SearchStatus count={users.length} text={text} />
                <table className="table m-0">
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
            </div>
        </div>
    );
};

Users.propTypes = {
    groupList: PropTypes.object.isRequired,
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageSize: PropTypes.number.isRequired,
    handlers: PropTypes.objectOf(PropTypes.object).isRequired,
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Users;
