import React from "react";
import BookMark from "./user/bookMark";
import Qualities from "./user/qualities";

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

export default TableCellFactory;
