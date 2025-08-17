import { motion } from 'framer-motion';

// styles & icons
import './SideMenu.css';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const variants = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: { opacity: 1, x: 0, 
    transition: { 
      type: 'spring', 
      damping: 18, 
    }  
  },
  exit: { opacity: 0, translateX: '-100vw', transition: { duration: .75 } }
}

export default function SideMenu() {
  return (
    <motion.div 
      className="side-menu"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ul>
        <motion.li whileHover={{scale:1.5, rotate:35}} whileTap={{scale:0.9}}>
          <a href="https://github.com/menomenonkwan" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </motion.li>
        <motion.li whileHover={{scale:1.5, rotate:35}} whileTap={{scale:0.9}}>
          <a href="https://www.linkedin.com/in/brannon-lee/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </motion.li>
        <motion.li whileHover={{scale:1.5, rotate:35}} whileTap={{scale:0.9}}>
          <a href="mailto:brannon.r.lee@gmail.com?subject=BrannonLee - Web-Development Inquiry" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
        </motion.li>
      </ul>
    </motion.div>
  )
}
