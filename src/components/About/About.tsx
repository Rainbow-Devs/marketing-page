import React from "react";
import groupPhoto from "../../images/group-photo.png"; // Adjust the relative path as necessary
import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={groupPhoto} alt="Group Photo" />
      </div>
      <div className="text-container">
        <h2>About</h2>
        <br />
        <p>
          We are a vibrant and inclusive group of coding enthusiasts dedicated
          to honing our skills, collaborating, and exploring the colorful world
          of software development.
        </p>
        <br />
        <p>
          Whether you're a seasoned professional or just starting your coding
          journey, Rainbow Devs offers a supportive environment where you can
          enhance your technical prowess, unleash your creativity, and create
          meaningful connections within the tech community.
        </p>
      </div>
    </div>
  );
};

export default About;
