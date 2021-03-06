import { FaGithub, FaCodepen, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const SideBar = () => {
  return ( 
    <AnimatePresence>
      <motion.div 
        className="sidebar"
        initial={{ opacity: 0, x: '-100vw' }}
        animate ={{ opacity: 1, x: 0, 
          transition: { 
          duration: 0.5, 
          delay: 0.1,
          type: 'spring',
          } 
        }}
        exit={{ opacity: 0, x: '-100vw' }}
        transition={{ duration: 0.2 }}
      >
        <ul>
          <motion.li whileHover={{scale:1.5, rotate:35}} whileTap={{scale:0.9}}>
            <a href="https://github.com/menomenonkwan" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </motion.li>
          <motion.li whileHover={{scale:1.5, rotate:35}} whileTap={{scale:0.9}}>
            <a href="https://codepen.io/menomenonkwan" target="_blank" rel="noreferrer">
              <FaCodepen />
            </a>
            </motion.li>
          <motion.li whileHover={{scale:1.5, rotate:35}} whileTap={{scale:0.9}}>
            <a href="https://www.linkedin.cn/in/brannon-lee/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </AnimatePresence>
   );
}

export default SideBar;