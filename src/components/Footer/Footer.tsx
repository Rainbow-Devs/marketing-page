import React from "react";
import "./Footer.scss";
import Github from "../../images/github.svg";
import Linkedin from "../../images/linkedin.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="icon-container">
          <a
            href="https://www.linkedin.com/company/rainbow-devs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Rainbow-Devs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
        <h2>Contact</h2>
        <p>
          <a href="mailto:hello@rainbowdevs.io">rainbowdevs22@gmail.com</a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Rainbow Devs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
