import React from "react";

const BookMark = ({ status, onClick }) => {
  const className = !status ? "bi bi-bookmark" : "bi bi-bookmark-heart-fill";

  return <button className={className} onClick={onClick}></button>;
};

export default BookMark;
