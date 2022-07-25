import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem,
    onClearSelect
}) => {
    if (!items) {
        return null;
    }

    const values = Object.values(items);

    return (
        <div className="d-flex flex-column m-2">
            <ul className="list-group">
                {values.map((object) => (
                    <li
                        key={object[valueProperty]}
                        className={
                            "list-group-item" +
                            (object === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(object)}
                        role="button"
                    >
                        {object[contentProperty]}
                    </li>
                ))}
            </ul>
            <button className="btn btn-secondary mt-2" onClick={onClearSelect}>
                Очистить
            </button>
        </div>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.object,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object.isRequired,
    onClearSelect: PropTypes.func.isRequired
};

export default GroupList;
