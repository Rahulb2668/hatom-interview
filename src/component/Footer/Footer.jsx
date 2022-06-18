import React from "react";
import { images } from "../../constants";
import "./Footer.scss";
import { MdOutlineCopyright } from "react-icons/md";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiMonster } from "react-icons/si";
const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-mainContainer">
        <img
          src={images.logo}
          alt=""
          className="removeondesktop"
          style={{ marginBottom: "10px" }}
        />
        <div className="app__footer-links">
          <img src={images.logo} alt="" />
          <div className="app__footer-links-col app__flex">
            <h3>Protocol</h3>
            {["Market", "Price", "Docs"].map((item, index) => (
              <a href="/" key={`${item}-${index}`}>
                {item}
              </a>
            ))}
          </div>
          <div className="app__footer-links-col  app__flex">
            <h3>Governance</h3>
            {["Overview", "Hatom Token"].map((item, index) => (
              <a href="/" key={`${item}-${index}`}>
                {item}
              </a>
            ))}
          </div>
          <div className="app__footer-links-col  app__flex">
            <h3>Security</h3>
            {["Audits", "Formal Verifications", "Economic Security", "Bug Bounty"].map(
              (item, index) => (
                <a href="/" key={`${item}-${index}`}>
                  {item}
                </a>
              )
            )}
          </div>
          <div className="app__navbar-appBtn">
            <button>App</button>
          </div>
        </div>

        <div className="app__footer-connections app__flex">
          <div className="app__footer-copyright removeonmobile">
            <MdOutlineCopyright /> 2022 Hatom.LLC.
          </div>
          <div className="app__footer-mediaLinks app__flex">
            <FaDiscord />
            <FaGithub />
            <SiMonster />
            <BsTwitter />
          </div>
        </div>
      </div>
      <div className="app__footer-last">
        <div className="app__footer-block">
          <div />
          Latest Block: 14296113
        </div>
        <div className="app__footer-copyright removeondesktop">
          <MdOutlineCopyright /> 2022 Hatom.LLC.
        </div>
      </div>
    </div>
  );
};

export default Footer;
