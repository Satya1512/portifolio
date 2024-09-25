import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.article`
  padding: 3rem 2rem;
  background: linear-gradient(135deg, black, gray);
  color: #fff;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AboutText = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
`;

const Highlight = styled.span`
  color: #ffdd57;
  font-weight: bold;
`;

function About(){
  return (
    <AboutSection>
      <AboutText>
        <Heading>About Me</Heading>
        <Paragraph>
          I'm a <Highlight>web developer</Highlight> with a passion for creating
          beautiful and functional websites. My skills include <Highlight>React.js</Highlight>,
          <Highlight>HTML/CSS, JavaScript</Highlight>, and more. I love bringing ideas to life
          through <Highlight>code</Highlight> and designing user-friendly interfaces.
        </Paragraph>
        <Paragraph>
          When I'm not coding, you can find me exploring new technologies,
          reading tech blogs, or working on personal projects that push the
          boundaries of web development.
        </Paragraph>
      </AboutText>
    </AboutSection>
  );
};

export default About;
