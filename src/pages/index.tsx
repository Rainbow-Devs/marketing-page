import * as React from "react";
import "../pages/index.scss"; // Import the global CSS file
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import HomeBody from "../components/HomeBody/HomeBody";
import Footer from "../components/Footer/Footer"; // Replace "path/to/Footer" with the actual path to your Footer component

const IndexPage: React.FC = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HomeBody />
      <Footer />
    </main>
  );
};

export default IndexPage;
