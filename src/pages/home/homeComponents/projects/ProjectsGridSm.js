import { useCallback, useEffect, useState } from 'react';
import { portfolioProjects } from '../../../../assets/Content';

// styles
import './ProjectsGridSm.css';

function Content({project}) {
  return (
    <div className="card-content-sm">
      <h3>{project.name}</h3>
      <p className='project-description-sm'>{project.description}</p>
      <div className="project-links-sm">
        <a href={project.url} target="_blank" rel="noreferrer" className='btn'>Live</a>
        <a href={project.code} target="_blank" rel="noreferrer" className='btn'>Code</a>
      </div>
      <div className="project-tools-sm">
        {project.tools.map((tool, i) => (
          <span key={i}> 
            {tool.icon}
          </span>
        ))}
      </div>
    </div>
  );
}

const Card = ({ project }) => {
  return (
    <div className='project-card-sm' >
      <div className="project-card-image" style={{ backgroundImage: `url(${project.image})`}} />
      <Content project={project}/>
    </div>
  )
}


const projectsToLoad = 2;

export default function ProjectsGridSm() {
  const [projectsToShow, setProjectsToShow] = useState([]);
  const [next, setNext] = useState(2);

  const loopWithSlice = useCallback((start, end) => {
    const slicedProjects = portfolioProjects.slice(start, end);
    setProjectsToShow([ ...slicedProjects ]);
  }, []);

  useEffect(() => {
    loopWithSlice(0, projectsToLoad);
  }, [loopWithSlice]);

  const handleShowMorePosts = () => {
    loopWithSlice(0, next + projectsToLoad);
    setNext(next + projectsToLoad);
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="projects">
          <h2>More Projects</h2>

          <div className='projects-container'>
            {projectsToShow.map(project => (
              <Card key={project.id} project={project}/>
            ))}

          {projectsToShow.length < portfolioProjects.length &&
            <button className='btn more' onClick={handleShowMorePosts}>Load More</button>
          }
          </div>
          
        </div>
      </div>
    </section>
  )
}
