import React from "react";
import "../styles/Header.scss";
import SearchComponent from "./SearchComponent";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <header className={"headerContainer"}>
      <SearchComponent />
      <HeaderContent />
    </header>
  );
};

export default Header;
