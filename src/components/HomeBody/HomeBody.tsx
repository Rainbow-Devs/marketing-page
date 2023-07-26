import React from "react";
import "./HomeBody.scss";
import { AboutImage } from "../AboutImage/AboutImage";

const HomeBody = () => {
  return (
    <div className="homepage-body-container">
      <div className="about-section">
        {/* Left column - Image */}
        <div className="about-image">
          <AboutImage />
        </div>
        {/* Right column */}
        <div className="about-content">
          <h2>About</h2>
          <p>
            We are a vibrant and inclusive group of coding enthusiasts dedicated
            to honing our skills, collaborating, and exploring the colorful
            world of software development.{" "}
          </p>
          <p>
            Whether you're a seasoned professional or just starting your coding
            journey, Rainbow Devs offers a supportive environment where you can
            enhance your technical prowess, unleash your creativity, and create
            meaningful connections within the tech community.
          </p>
        </div>
      </div>
      <div className="projects-section">
        <p>Projects</p>

        {/* Content for the Projects section goes here */}
        {/* You can add text, images, or any other components */}
      </div>
      <div className="join-us-section">
        <p>Join Us</p>

        {/* Content for the Join Us section goes here */}
        {/* You can add text, images, or any other components */}
      </div>
    </div>
  );
};

export default HomeBody;
