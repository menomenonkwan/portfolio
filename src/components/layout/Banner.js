import { FaGithub, FaCodepen, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Banner = () => {
  return ( 
    <div className="banner">
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
    </div>
   );
}

export default Banner;