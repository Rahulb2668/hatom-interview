import React from "react";
import "./Navbar.scss";
import { HiMenu } from "react-icons/hi";
import { images } from "../../constants";
const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="" />
        <span>hotam</span>
      </div>
      <ul className="app__navbar-links">
        {["markets", "governance", "prices", "docs", "hatom token"].map((item) => (
          <li key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>
      <div className="app__flex">
        <div className="app__navbar-mobileBtn app__flex">
          <img src={images.elrondWhite} alt="elrond" />
        </div>
        <div className="app__navbar-menu">
          <HiMenu />
        </div>
      </div>
      <div className="app__navbar-appBtn">
        <button>App</button>
      </div>
    </nav>
  );
};

export default Navbar;
