import { projectLinks } from './assets/Content';
import { Link } from 'react-router-dom';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { useEffect } from 'react';

function moveGrid(e) { 
  const walk = 25;
  let { offsetX: x, offsetY: y } = e;
  const { offsetWidth: width, offsetHeight: height } = this;
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  this.style.transform = `rotateX(${-yWalk}deg) rotateY(${xWalk}deg)`;

  this.addEventListener('mouseleave', () => {
    this.style.transform = 'rotateX(0deg) rotateY(0deg)';      
  });
}


const Projects = () => {

  useEffect(() => {
    const items = document.querySelectorAll('.inner');
    items.forEach(item => item.addEventListener('mousemove', moveGrid));
    return () => {
      items.forEach(item => item.removeEventListener('mousemove', moveGrid));
    }
  }, []);

  return ( 
    <div className="container">
    <div id="projects-card">
      <h3>SOME OF MY PROJECTS</h3>
      <div className="projects-grid">
        {projectLinks.map(link => (
          <div className="grid-item" key={link.id}>
            <h5>{ link.name }</h5>
            <div className="inner" style={{ backgroundImage: `url(${ link.image })` }}>     
              <div className="desc">
                {(link.url).startsWith('/')
                  ? <Link to={ link.url }>
                      View <FaExternalLinkSquareAlt />
                    </Link>
                  : <a href={ link.url } target="_blank" rel="noreferrer">
                      View <FaExternalLinkSquareAlt />
                    </a>
                }
                <p>
                  { link.description}
                </p>
              </div> 
            </div>  
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
export default Projects;