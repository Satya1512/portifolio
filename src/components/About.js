import React from 'react';
import photo from "./images/photo.png"
function About() {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-text">
          <h2 className="heading">About Me</h2>
          <p className="paragraph">
            I'm a <span className="highlight">web developer</span> with a passion for creating
            beautiful and functional websites. My skills include <span className="highlight">React.js</span>,
            <span className="highlight">HTML/CSS, JavaScript</span>, and more. I love bringing ideas to life
            through <span className="highlight">code</span> and designing user-friendly interfaces.
          </p>
          <p className="paragraph">
            When I'm not coding, you can find me exploring new technologies,
            reading tech blogs, or working on personal projects that push the
            boundaries of web development.
          </p>
        </div>
      </div>
      <div className="self-photo">
      <img src={photo} alt="Photo" />
      </div>
    </div>
  );
}

export default About;


