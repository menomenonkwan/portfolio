import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Block = ({ project }) => {
  return ( 
    <div className="item">
    <div className="box">
      <div className="face front">
        <div className="front-wrapper">
          <div className="background" style={{ backgroundImage: `url(${ project.src })` }}></div>
          <div className="foreground">
            <h3>{ project.name }</h3>
          </div>
        </div>
      </div>
      <div className="face back">
        <div className="back-wrapper">
          <div className="background" style={{ backgroundImage: `url(${ project.src })` }}></div>
          <div className="description">
            <h3>{ project.name }</h3>
            <p>{ project.description}</p>
            <motion.div 
              style={{margin: '1rem'}} 
              whileHover={{scale: 1.1}} 
              whileTap={{scale: 0.9}}
            >
              <a href={ project.link } target="_blank" rel="noreferrer">View <FaExternalLinkSquareAlt /></a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="face right"></div>
      <div className="face left"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
    </div>
  </div>
   );
}
 
export default Block;
