import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagiantion = ({ itemsCount, currentPage, pageSize, onPageChange }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pageCount + 1);

    if (pageCount === 1) {
        return null;
    }

    const getActiveClass = (page) => (page === currentPage ? "active" : "");

    return (
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        key={page}
                        className={"page-item " + getActiveClass(page)}
                    >
                        <button
                            className="page-link "
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagiantion.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagiantion;
