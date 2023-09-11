import * as React from "react";
import "../pages/index.scss"; // Import the global CSS file

import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import HomeBody from "../components/HomeBody/HomeBody";
import Footer from "../components/Footer/Footer"; 
const IndexPage: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <HomeBody />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;
