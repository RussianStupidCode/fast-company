import React from "react";
import DeleteButton from "./deleteButton";
import TableCellFactory from "./tableCellFactory";
import PropTypes from "prop-types";

const TableRow = ({ user, handlers }) => {
    return (
        <tr>
            {user.values.map(({ name, value }, index) => (
                <td key={index}>
                    <TableCellFactory
                        userId={user._id}
                        name={name}
                        value={value}
                        handlers={handlers}
                    />
                </td>
            ))}

            <td>
                <DeleteButton
                    onClick={() => handlers.deleteButton.onClick?.(user._id)}
                />
            </td>
        </tr>
    );
};

TableRow.propTypes = {
    user: PropTypes.object.isRequired,
    handlers: PropTypes.objectOf(PropTypes.object).isRequired
};

export default TableRow;
