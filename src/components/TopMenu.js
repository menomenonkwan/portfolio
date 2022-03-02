import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import Progress from './Progress';

// styles
import './TopMenu.css';

const variants = {
  hidden: { opacity: 0, y: '-100vh' },
  visible: { opacity: 1, y: 0, 
    transition: { 
      type: 'spring', 
      damping: 18, 
  }},
  exit: { opacity: 0, translateY: '-100vh', transition: { duration: .75 } },
}

export default function TopMenu() {
  return (
    <motion.div
      className='top-menu'
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Progress />
      <div className="top-menu-nav">

      <HashLink to="/#home" smooth className='brand'>Brannon Lee</HashLink>
        <ul>
          <li><HashLink to="/#about" smooth>About</HashLink></li>
          <li><HashLink to="/#featured-projects" smooth>Projects</HashLink></li>
          <li><HashLink to="/#contact" smooth>Contact</HashLink></li>
        </ul>
      </div>
    </motion.div>
  )
}
