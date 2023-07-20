import React from "react";
import laptopMock from "../../images/laptop-mock.png"; // Adjust the relative path as necessary
import "./Projects.scss";

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="text-container">
        <h1>WellPath</h1>
        <p>
          Say goodbye to a million different fitness apps and hello to WellPath,
          your one-stop-shop health and wellness tracker. Keep track of your
          physical and mental health all in one place.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Fitness log</li>
          <li>Reminders</li>
          <li>Calorie counter</li>
        </ul>
      </div>
      <div className="image-container">
        <img src={laptopMock} alt="Laptop Mockup" />
      </div>
    </div>
  );
};

export default Projects;
