import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ count, text }) => {
    let className = "badge m-1 p-1";
    className =
        count > 0 ? `${className} bg-primary` : `${className} bg-danger`;

    return (
        <h2>
            <span className={className}>{text}</span>
        </h2>
    );
};

SearchStatus.propTypes = {
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};

export { SearchStatus };
