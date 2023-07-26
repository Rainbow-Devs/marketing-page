import React from "react";
import { Link } from "gatsby";
import "./Navbar.scss";
import rainbowLogo from "../../images/rainbow-devs-logo.jpg";

type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <nav>
      <div className="logo">
        <div className="logo-content">
          <img src={rainbowLogo} alt="rainbow-logo" />
          <div className="text">
            <span className="rainbow">Rainbow</span>
            <span className="devs">Devs</span>
          </div>
        </div>
      </div>

      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/join-us">Join Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
