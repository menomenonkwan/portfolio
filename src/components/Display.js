import { portfolioProjects } from './assets/Content';
import Block from './layout/Block';
import { motion } from 'framer-motion';

const Display = () => {
  return ( 
    <motion.div
      className="portfolio-main"
      initial={{ opacity: 0, y: '-100vh' }}
      animate ={{ opacity: 1, y: 0, 
        transition: { 
        duration: 0.4, 
        delay: 0.4,
        type: 'spring',
        stiffness: 90,
        mass: 0.7,
        damping: 15,
        } 
      }}
      exit={{ opacity: 0 }}
    >
      <div className="grid">
        {portfolioProjects.map(project => (
          <Block key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
   );
}
 
export default Display;