import React from "react";
import "./Footer.scss";
import Github from "../../images/github.svg";
import Linkedin from "../../images/linkedin.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          <div className="icon-container">
            <Linkedin />
            <Github />
          </div>
          <h2>Contact</h2>
          <p>rainbowdevs22@gmail.com</p>
          <br />
          &copy; {new Date().getFullYear()} Rainbow Devs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
