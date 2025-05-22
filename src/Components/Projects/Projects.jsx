import React from 'react';
import './Projects.css';
import Projects_Data from '../../assets/projects_data';

// Importing images properly
import themePattern from '../../assets/theme_pattern.svg';
import arrowIcon from '../../assets/arrow_icon.svg';

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={themePattern} alt="theme pattern" />
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
                <img src={arrowIcon} alt="arrow" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
