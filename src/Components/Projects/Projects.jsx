import React from 'react';
import './Projects.css';
import Projects_Data from '../../assets/projects_data';

const Projects = () => {
  return (
    <div id ='projects' className='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src="src/assets/theme_pattern.svg" alt="" />
      </div>
      <div className="projects-container">
        {Projects_Data.map((project, index) => {
          return (
            <div key={index} className="projects-format">
              <h3>{project.s_no}</h3>
              <h2>{project.s_name}</h2>
              <p>{project.s_desc}</p>
              <a
                href={project.s_link}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-readmore"
              >
                <p>Read More</p>
                <img src="src/assets/arrow_icon.svg" alt="arrow" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
