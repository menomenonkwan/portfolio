import { FaArrowCircleDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';

const variants = {
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

const Arrow = ({ location }) => {
  return (
    <AnimatePresence>
      <motion.div 
        className="arrow" 
        variants={variants} 
        initial="initial" 
        animate="animate" 
        whileHover={{scale: 1.2}} 
        whileTap={{scale: 0.9}}
      > 
        <Link to={location} ><FaArrowCircleDown /></Link>   
      </motion.div>
    </AnimatePresence>
  );
}

export default Arrow;