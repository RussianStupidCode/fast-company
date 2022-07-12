import React from "react";
import Quality from "./quality";

const Qualities = ({ qualityList }) => {
  return qualityList.map(({ _id, name, color }) => (
    <Quality key={_id} name={name} color={color} />
  ));
};

export default Qualities;
