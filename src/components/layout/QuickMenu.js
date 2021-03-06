import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';

const QuickMenu = ({ addAClass }) => {

  return ( 
    <motion.div 
      className={`sub-menu ${addAClass}`}
      initial={{ opacity: 0 }}
      animate ={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-125%' }}
      transition={{ duration: 0.2 }}
    >
      <h3>Brannon Lee</h3>
      <ul>
        <Link to="/#projects-card"><li>Projects</li></Link>
        <Link to="/#about-card"><li>About</li></Link>
        <Link to="/#contact-card"><li>Contact</li></Link>
      </ul>
    </motion.div>
   );
}
 
export default QuickMenu;
