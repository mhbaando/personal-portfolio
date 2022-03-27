import React from "react";
import { Menus, Hero } from "../../Components/index";
import "./Header.scss";
const Header = () => {
  return (
    <div className="mh__header">
      <Menus />
      <Hero />
    </div>
  );
};

export default Header;
