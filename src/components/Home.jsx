import React from "react";
import Card from "./Card";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Welcome</h1>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Header;
