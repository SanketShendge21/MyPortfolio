// ProjectContainer.js

import React from 'react';
import './Project.css';
import { RiGithubFill } from 'react-icons/ri';
import { MdOutlineLaunch } from "react-icons/md";

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <div className='project__img-container'>
      <img src={project.img} alt="Not found" className='project__img' />
    </div>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item, index) => (
          <li key={index} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    <ul className='project__icon'>

    {project.sourceCode && (
      
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <RiGithubFill />
      </a>
    )}

    {project.livePreview && (

      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <MdOutlineLaunch />
      </a>
      
    )}
    </ul>
  </div>
);

export default ProjectContainer;
