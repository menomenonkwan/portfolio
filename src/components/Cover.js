import { FaGithub, FaCodepen, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
import Arrow from './layout/Arrow';

const hoverVariants = {
  scale:1.5, rotate:45, transition: {duration: 0.25}
}

const Cover = () => {
  return (
    <div className="container">
    <div id="title-card">
      <h2 className="spin">
        <span>B</span>
        <span>r</span>
        <span>a</span>
        <span>n</span>
        <span>n</span>
        <span>o</span>
        <span>n</span>
        <span>&nbsp;</span>
        <span>L</span>
        <span>e</span>  
        <span>e</span>
      </h2>
      <h2 className="un-spin">Brannon Lee</h2>
      <ul className="icons fade-in">
        <a href="https://github.com/menomenonkwan" target="_blank" rel="noreferrer">
          <motion.li whileHover={hoverVariants} whileTap={{scale: 0.9}}>
            <FaGithub />
          </motion.li>
        </a>
        <a href="https://codepen.io/menomenonkwan" target="_blank" rel="noreferrer">
          <motion.li whileHover={hoverVariants} whileTap={{scale: 0.9}}>
            <FaCodepen />
          </motion.li>
        </a>
        <a href="https://www.linkedin.com/in/brannon-lee/" target="_blank" rel="noreferrer">
          <motion.li whileHover={hoverVariants} whileTap={{scale: 0.9}}>
            <FaLinkedin />
          </motion.li>
        </a>
        <Link to="#contact-card">
          <motion.li whileHover={hoverVariants} whileTap={{scale: 0.9}}><FaEnvelope /></motion.li>
        </Link>      
      </ul>
      <Arrow location="#projects-card"/>
    </div>
    </div>
  );
}
 
export default Cover;