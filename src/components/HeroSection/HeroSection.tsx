import React from "react";
import "./HeroSection.scss";
import { HeroImage } from "../HeroImage/HeroImage";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="hero-container">
      <HeroImage />
      <div className="hero-content">
        <p className="hero-content__description">
          Rainbow Devs is a community of LGBTQ+ developers
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
