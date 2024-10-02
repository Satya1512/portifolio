import React from 'react';
import styled from 'styled-components';
import wallpaper from "./images/wallpaper.jpg"

const HeroSection = styled.section`
  height: 90vh;
  background: url(${wallpaper}) center/cover no-repeat;
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
    <HeroSection>
      <HeroContent>
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate web developer.</p>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;
