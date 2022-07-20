import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onClick }) => {
    const className = !status ? "bi bi-bookmark" : "bi bi-bookmark-heart-fill";

    return <button className={className} onClick={onClick}></button>;
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    onClick: PropTypes.func
};

export default BookMark;
