import React from 'react';
import heroImage from './hero-img.jpg';
import './HeroSection.scss';

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className='hero-image'>
      <img src={heroImage} alt='hero-image' />
      <div className='hero-text'>
        <h1>Rainbow Devs</h1>
        <p>A community for LGBTQ+ coders to learn together</p>
      </div>
    </div>
  );
}
