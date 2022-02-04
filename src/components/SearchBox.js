import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pd2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search for robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
