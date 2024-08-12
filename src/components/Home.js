import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  background: ${({ backgroundImage }) => `url(${backgroundImage}) center/cover no-repeat`};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const Home = () => {
  return (
    <HeroSection backgroundImage="https://e0.pxfuel.com/wallpapers/846/344/desktop-wallpaper-portfolio.jpg">
      <HeroContent>
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate web developer.</p>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;
