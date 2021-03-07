import Nav from './Nav';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {

  return (
    <AnimatePresence>
      <motion.header
        initial={{ opacity: 0, y: '-100vh' }}
        animate={{ opacity: 1, y: 0,
          transition: { duration: 2, delay: 3, type: 'spring',
          stiffness: 90,
          mass: 0.7,
          damping: 15,} 
        }} 
      >
        <div className="heading">
          <h1>WebDeveloper</h1>
          <Nav />
        </div> 
        <aside className="heading-tag">
          <h3>Front-End UI Development</h3>
          <h4>HTML / CSS / Javascript</h4>
        </aside>
      </motion.header> 
    </AnimatePresence>
  );
}

export default Header;