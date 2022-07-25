import React from "react";
import PropTypes from "prop-types";

const Pagiantion = ({
    currentPage,
    pages,
    onPageChange,
    onPageNext,
    onPagePrevious
}) => {
    if (pages.length === 1 && currentPage === 1) {
        return null;
    }

    const getActiveClass = (page) => (page === currentPage ? "active" : "");

    return (
        <nav className="d-flex justify-content-center mt-2">
            <ul className="pagination">
                <li key={"previous"} className={"page-item"}>
                    <button className="page-link" onClick={onPagePrevious}>
                        previous
                    </button>
                </li>
                {pages.map((page) => (
                    <li
                        key={"page_" + page}
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
                <li key={"next"} className={"page-item"}>
                    <button className="page-link" onClick={onPageNext}>
                        next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

Pagiantion.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.arrayOf(PropTypes.number).isRequired,
    onPageChange: PropTypes.func.isRequired,
    onPageNext: PropTypes.func.isRequired,
    onPagePrevious: PropTypes.func.isRequired
};

export default Pagiantion;
