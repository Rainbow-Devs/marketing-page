import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export function Logo() {
  return (
    <StaticImage
      src="../../images/rainbow-devs-logo.jpg"
      alt="Rainbow Devs Logo"
      layout="fixed"
      width={50}
      height={50}
      style={{ borderRadius: "10%" }}
    />
  );
}
