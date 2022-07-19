import React from "react";
import PropTypes from "prop-types";

const TableHead = ({ headers }) => {
    return (
        <thead>
            <tr>
                {headers.map((head, index) => (
                    <th key={index} scope="col">
                        {head}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHead.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TableHead;
