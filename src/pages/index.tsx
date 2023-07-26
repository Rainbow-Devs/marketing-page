// pages/index.tsx
import * as React from "react";
import { useEffect } from "react";
import "../pages/index.scss"; // Import the global CSS file
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";

const IndexPage: React.FC = () => {
  useEffect(() => {
    // Toggle debug mode by setting this variable to true or false
    const debugMode = true;
    if (debugMode) {
      document.documentElement.classList.add("debug");
    } else {
      document.documentElement.classList.remove("debug");
    }
  }, []);

  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default IndexPage;
