import React from "react";
import "../styles/Header.scss";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = () => {
  return (
    <div className={"searchWrapper"}>
      <SearchIcon className={"searchIcon"} />
      <input
        className={"searchInput"}
        placeholder={"Search by Creator, Details or Type"}
      />
    </div>
  );
};

export default SearchComponent;
