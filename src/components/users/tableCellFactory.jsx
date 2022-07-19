import React from "react";
import BookMark from "./user/bookMark";
import Qualities from "./user/qualities";
import PropTypes from "prop-types";

const TableCellFactory = ({ userId, name, value, handlers }) => {
    if (name === "bookmark") {
        return (
            <BookMark
                status={value}
                onClick={() => handlers.bookmark.onClick(userId)}
            />
        );
    }

    if (name === "qualities") {
        return <Qualities qualityList={value} />;
    }

    return value;
};

TableCellFactory.propTypes = {
    userId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    handlers: PropTypes.objectOf(PropTypes.object).isRequired
};

export default TableCellFactory;
