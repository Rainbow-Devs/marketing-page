import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import './index.scss';
import { HeroSection } from '../components/HeroSection';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Footer email="rainbowdevs22@gmail.com"/>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rainbow Devs</title>;
