import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export function HeroImage() {
  return (
    <StaticImage
      src="../../images/heroImage.jpg"
      alt="image of code displayed on a screen"
    />
  );
}
