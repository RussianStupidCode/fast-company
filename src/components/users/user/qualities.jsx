import React from "react";
import Quality from "./quality";
import PropTypes from "prop-types";

const Qualities = ({ qualityList }) => {
    return qualityList.map(({ _id, name, color }) => (
        <Quality key={_id} name={name} color={color} />
    ));
};

Qualities.propTypes = {
    qualityList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Qualities;
