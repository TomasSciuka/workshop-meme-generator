import React from "react";
import "./Header.css";
import headerImg from "../../static/Trollface.png";
const Header = () => {
  return (
    <header>
      <img src={headerImg} alt="Problem?" />
      <h1 className="page-title">Meme Generator</h1>
    </header>
  );
};
export default Header;
