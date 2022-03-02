import { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { portfolioProjects } from '../../../../assets/Content';

// styles
import './ProjectsGrid.css';


function Content({project}) {
  return (
    <motion.div
      className="card-content"
      layout
      initial={{ opacity: 0, scale: 0, x: 0, borderRadius: '100%', rotate: 540 }}
      animate={{ opacity: 1, scale: 1, x: 0, borderRadius: 0, rotate: 0 }}
      exit={{ opacity: 0, scale: 0, x: 0, borderRadius: '100%', rotate: 540 }}
      transition={{ duration: 0.5 }}
    >
      <p className='project-description'>{project.description}</p>
      <div className="project-links">
        <a href={project.url} target="_blank" rel="noreferrer" className='btn'>Live</a>
        <a href={project.code} target="_blank" rel="noreferrer" className='btn'>Code</a>
      </div>
      <div className="project-tools">
        {project.tools.map((tool, i) => (
          <span key={i}> 
            {tool.icon}
            <p className='project-tooltip'>{tool.name}</p>
            <div className="tooltip-arrow"></div>
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bigger = isOpen ? 1.05 : 1;
  const forwards = isOpen ? 1 : 'unset';

  return (<div className="project-frame">
    <motion.div 
      className='projects-card'
      layout 
      whileHover={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
      style={{ backgroundImage: `url(${project.image})`}}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: bigger, 
        zIndex: forwards, 
        borderRadius: isOpen ? 35 : 0,
        rotateX: isOpen ? 0 : 2,
      }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="avatar" layout>
        <p>{project.name}</p>
      </motion.div>
      <AnimatePresence>
        {isOpen && <Content project={project}/>}
      </AnimatePresence>
    </motion.div></div>
  )
}

export default function ProjectsGrid() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects">
          <h2>More Projects</h2>

          <AnimateSharedLayout>
            <motion.div layout className="projects-grid">
              {portfolioProjects.map(project => (
                <Card key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimateSharedLayout>
        </div>
      </div>
    </section>
  )
}
