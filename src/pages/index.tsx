import * as React from "react";
import "../pages/index.scss"; // Import the global CSS file
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import HomeBody from "../components/HomeBody/HomeBody";

const IndexPage: React.FC = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HomeBody />
    </main>
  );
};

export default IndexPage;
