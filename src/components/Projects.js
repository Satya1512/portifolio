import React from 'react';
import styled from 'styled-components';
import projectsData from '../data/projectsData';

const ProjectsSection = styled.section`
  padding: 2rem;
  background-color: #fff;
  color: #333;
`;

const ProjectCard = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: #007BFF;
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>My Projects</h2>
      {projectsData.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectTitle>{project.name}</ProjectTitle>
          <p>{project.description}</p>
          <p><strong>Technologies Used:</strong> {project.technologies}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </ProjectCard>
      ))}
    </ProjectsSection>
  );
};

export default Projects;
