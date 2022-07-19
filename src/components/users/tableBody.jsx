import React from "react";
import PropTypes from "prop-types";
import TableRow from "./tableRow";

const TableBody = ({ users, handlers }) => {
    return (
        <tbody>
            {users.map((user) => {
                return (
                    <TableRow key={user._id} user={user} handlers={handlers} />
                );
            })}
        </tbody>
    );
};

TableBody.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    handlers: PropTypes.objectOf(PropTypes.object).isRequired
};

export default TableBody;
