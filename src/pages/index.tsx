import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import './index.scss';
import { HeroSection } from '../components/HeroSection';
import { Navbar } from '../components/Navbar';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>Rainbow Devs</p>
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Rainbow Devs</title>;
