import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

// styles & images & icons
import './Landing.css';
import backgroundImage from '../../../assets/images/background_image.jpg';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowCircleDown } from 'react-icons/fa';

const iconVariants = {
  scale:1.5, rotate:45, transition: {duration: 0.25}
}

const arrowVariants = {
  initial: { opacity: 0, rotateX: 90, rotateY: 90},
  animate: { opacity: 1, rotateX: 0, rotateY: 0,
    transition: { 
      delay: 3, 
      duration: 0.5,
      type: 'spring',
      stiffness: 110,
      mass: 0.4,
      damping: 40,
    } 
  },
}

export default function Landing() {
  return (
    <section 
      className="landing-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="landing">
        <div className="landing-content">
          
          <h2 className="landing-title">
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
          <h2 className="mobile-landing-title">Brannon Lee</h2>

          <div className="landing-socials">
            <ul>
              <motion.li whileHover={iconVariants} whileTap={{scale: 0.9}}>
                <a href="https://github.com/menomenonkwan" target="_blank" rel="noreferrer"><FaGithub /></a>
              </motion.li>
              <motion.li whileHover={iconVariants} whileTap={{scale: 0.9}}>
                <a href="https://www.linkedin.com/in/brannon-lee/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              </motion.li>
              <motion.li whileHover={iconVariants} whileTap={{scale: 0.9}}>
                <HashLink to="#contact"><FaEnvelope /></HashLink>
              </motion.li>
            </ul>
          </div>
        </div>

        <motion.div 
          className='arrow-link'
          variants={arrowVariants} 
          initial="initial" 
          animate="animate" 
          whileHover={{scale: 1.2}} 
          whileTap={{scale: 0.9}}
        > 
          <HashLink to="#about"><FaArrowCircleDown /></HashLink>   
        </motion.div>
      </div>
    </section>
  )
}
