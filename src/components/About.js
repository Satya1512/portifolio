import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.article`
  padding: 2rem;
  background-color: ${({ bgColor }) => bgColor || '#f4f4f4'};
  text-align: center;
`;

const AboutText = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
`;

const About = () => {
  return (
    <AboutSection>
      <AboutText>
        <h2>About Me</h2>
        <p>
          I'm a web developer with a passion for creating beautiful and
          functional websites. My skills include React.js, HTML/CSS and more.
        </p>
      </AboutText>
    </AboutSection>
  );
};

export default About;