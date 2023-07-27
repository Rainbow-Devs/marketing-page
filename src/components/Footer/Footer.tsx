import React from "react";
import "./Footer.scss"; // Import your CSS or SCSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          
          <p>Contact</p>
          <p>rainbowdevs22@gmail.com</p>
          &copy; {new Date().getFullYear()} Rainbow Devs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
