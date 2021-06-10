import React from "react";
import Body from "./Body";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Welcome</h1>
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
};

export default Header;
