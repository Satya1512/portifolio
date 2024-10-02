import React from 'react';
import styled from 'styled-components';
import projectsData from '../data/projectsData';

const ProjectsSection = styled.section`
  padding:1rem;
  background-color:cloud;
  color: #333;
  padding-left:7rem;
`;

const ProjectCard = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(140deg, black, gray);
  color: white;
  text-align:left;
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
  width:95%;
  &:hover {
    transform: scale(1.05); /* Increase size by 5% */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Add a more pronounced shadow */
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #007BFF;
  padding-bottom: 20px
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <div className= "Titile"><h2>My Projects</h2></div>
      {projectsData.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectTitle>{project.name}</ProjectTitle>
          <p>{project.description}</p>
          <p><strong>Technologies Used:</strong> {project.technologies}</p>
          <div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
            {project.videoLink && (
              <a href={project.videoLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
                Watch Video
              </a>
            )}
          </div>
        </ProjectCard>
      ))}
    </ProjectsSection>
  );
};

export default Projects;
