import React from "react";
import Logo from "../media/pages/logo.png";

import { useHistory } from "react-router-dom";
import { Search } from "./search";

const NavBar = () => {
  const history = useHistory();

  function handleLogoClick() {
    history.push("/");
  }

  function handleCollectionsClick() {
    history.push("/collections");
    alert("checkout your plants!");
  }
  return (
    <div className="topNav">
      <div className="logo">
        <img
          className="logoImg"
          alt="Logo"
          src={Logo}
          onClick={handleLogoClick}
        />
      </div>
      <Search />

      <div className="collectionsWrapper">
        <button className="collectionsButton" onClick={handleCollectionsClick}>
          {" "}
          Collections
        </button>
      </div>
    </div>
  );
};
export default NavBar;
