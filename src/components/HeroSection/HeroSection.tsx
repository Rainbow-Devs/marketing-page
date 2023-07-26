import React from "react";
import "./HeroSection.scss";
import { HeroImage } from "../HeroImage/HeroImage";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="hero-container">
      <HeroImage />
      <div className="hero-content">
        <h1 className="hero-content__title">Rainbow Devs</h1>
        <p className="hero-content__description">
          A community of LGBTQ+ developers
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
