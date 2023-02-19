import React from 'react';
import{ project } from '../constants';
import styles, { layout } from '../style';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className={`${layout.section}`}>
      <div className={`${layout.sectionImg} flex-col`}>
      {project.map((project, index) => (
        <ProjectCard key={project.id} {...project} index={index} />
      ))}
      </div>
    </section>
  )
}

export default Projects