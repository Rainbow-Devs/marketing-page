import React from "react";
import "./Footer.scss";
import linkedin from "./linkedin.svg";
import github from "./github.svg";

interface FooterProps {
  email: string;
}
const Footer: React.FC<FooterProps> = ({ email }) => {
  return (
    <div className="footer">
      <div className="footer-links">
        <img
          src={github}
          alt="github-logo"
          onClick={() => {
            window.open(
              "https://github.com/Rainbow-Devs",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        />

        <img
          src={linkedin}
          alt="linkedin-logo"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/company/rainbow-devs/",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        />
      </div>
      <p id="contact-info">Contact</p>
      <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        {email}
      </a>
      <p>© 2023 Rainbow Devs. All rights reserved</p>
    </div>
  );
};

export default Footer;
