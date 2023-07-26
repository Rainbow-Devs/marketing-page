import React from "react";
import { Link } from "gatsby";
import { Logo } from "../../components/Logo/logo"; // Import the Logo component
import "./Navbar.scss";

type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <div className="logo-content">
          {/* Render the Logo component here */}
          <Logo />
          <div className="text">
            <span className="text__rainbow">Rainbow</span>
            <span className="text__devs">Devs</span>
          </div>
        </div>
      </div>

      <div className="links">
        <Link to="/about" className="links__link">
          About
        </Link>
        <Link to="/projects" className="links__link">
          Projects
        </Link>
        <Link to="/join-us" className="links__link">
          Join Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
