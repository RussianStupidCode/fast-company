import React from "react";
import PropTypes from "prop-types";

const DeleteButton = ({ onClick }) => {
    return (
        <button type="button" className="btn btn-danger" onClick={onClick}>
            delete
        </button>
    );
};

DeleteButton.propTypes = {
    onClick: PropTypes.func
};

export default DeleteButton;
