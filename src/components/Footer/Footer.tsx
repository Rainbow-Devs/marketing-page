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
        <img src={github} alt="github-logo" />
        <img src={linkedin} alt="linkedin-logo" />
      </div>
      <p id="contact-info">Contact</p>
      <p>{email}</p>
      <p>© 2023 Rainbow Devs. All rights reserved</p>
    </div>
  );
};

export default Footer;
