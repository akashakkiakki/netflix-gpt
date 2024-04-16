import React from "react";
import logo from  "../assets/Netflix_Logo.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-30">
        <img className="w-44" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
