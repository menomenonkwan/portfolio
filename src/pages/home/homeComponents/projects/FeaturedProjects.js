import ReactTooltip from 'react-tooltip';
import { featuredProjects } from '../../../../assets/Content';
import { FadeInWhenVisible } from '../../../../components/FadeIn';

// styles
import './FeaturedProjects.css';

export default function FeaturedProjects() {

  return (
    <section id="featured-projects">
      <div className="container">
        <div className="featured-projects">
          <h2>Featured Projects</h2>
          
          {featuredProjects.map(project => (
            <FadeInWhenVisible key={project.id} >
              <div className="featured-project-card">

                <div className="featured-project-frame" >
                  <div className="featured-project-image" style={{ backgroundImage: `url(${project.image})`}}></div>
                </div>

                <div className="featured-project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="featured-project-info-links">
                    <a href={project.url} target="_blank" rel="noreferrer" className='btn'>Live Site</a>
                    {project.code && 
                      <a href={project.code} target="_blank" rel="noreferrer" className='btn'><code>Code</code></a>
                    }
                  </div>

                  <div className="featured-project-tools">
                  {project.tools.map((tool, i) => (
                    <span key={i} data-tip={tool.name}> 
                      {tool.icon}
                      <ReactTooltip />
                    </span>
                  ))}
                </div>
              </div>
            
            </div>
            </FadeInWhenVisible>
          ))}
        </div>

      </div>
    </section>
  )
}
