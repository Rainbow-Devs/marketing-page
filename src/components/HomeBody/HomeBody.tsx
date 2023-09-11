import React, { useEffect, useState } from "react";
import "./HomeBody.scss";
import { AboutImage } from "../AboutImage/AboutImage";
import { ProjectImage } from "../ProjectImage/ProjectImage";

const HomeBody = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 10) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 100) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <div className="homepage-body-container">
      <div id="about" className="about-section">
        <div className="about-image">
          <AboutImage />
        </div>
        <div className="about-content">
          <h2>About</h2>
          <p>
            We are a vibrant and inclusive group of coding enthusiasts dedicated
            to honing our skills, collaborating, and exploring the colorful
            world of software development.
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
      <h2 className="project-head">Projects</h2>
      <div id="projects" className="projects-section">
        <div className="left">
          <div className="content-left">
            <h3 className="wellpath">WellPath</h3>
            <p>
              Say goodbye to a million different fitness apps and hello to
              WellPath, your one-stop-shop health and wellness tracker. Keep
              track of your physical and mental health all in one place.{" "}
            </p>

            <h4>Features</h4>
            <ul>
              <li>Fitness Log</li>
              <li>Reminders</li>
              <li>Calorie Counter</li>
            </ul>

            <div className="buttons">
              <a
                href="www.rainbowdevs.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="visit-wellpath-btn">Visit WellPath</button>
              </a>
              <a
                href="https://github.com/Rainbow-Devs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-the-code-btn">Source Code</button>
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="content-right">
            <ProjectImage />
          </div>
        </div>
      </div>
      <div id="join-us" className="join-us-section">
        <div className="text-container">
          <h2>Join Us</h2>
          <p>
            Do you want to gain more technical experience, collaborate across
            disciplines, and work in an agile environment? We’re looking for
            designers, developers, data science, and devops to join the team!
            Once you join our Slack, you’ll have access to our resources and be
            able to contribute right away.
          </p>
          <a
            href="https://join.slack.com/t/rainbowdevs/shared_invite/zt-22yz1y9lx-dW4OHp2o1TwDCRnQbD5hTg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="join-us-btn">Join Our Slack</button>
          </a>
        </div>
      </div>
      <button
        className="scrollTop"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        Back to top
      </button>
    </div>
  );
};

export default HomeBody;
