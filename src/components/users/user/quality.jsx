import React from "react";
import PropTypes from "prop-types";

const Quality = ({ color, name }) => {
    const getBadgeClass = (color) => {
        return `badge bg-${color} mx-1`;
    };

    return <span className={getBadgeClass(color)}>{name}</span>;
};

Quality.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Quality;
